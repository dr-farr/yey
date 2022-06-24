import { GoalDataPoint, GoalDataType } from 'truenorth-graphql';
import dayjs from 'utils/dayjs';
import * as djs from 'dayjs';
import { ILine, LineModel } from 'simulator/model/index';
import getUnitsBetweenTwoDates from 'utils/dates/getMonthsBetweenDates';
import { findIndex } from 'lodash';

/**
 * Projection line model that produces polygonal style graphs from collections of
 * milestones.
 */
export class SimulationStrategyLineModel implements LineModel {
  private start: GoalDataPoint;
  private end: GoalDataPoint;

  private intermediate: GoalDataPoint[];

  /**
   * Base linear interpolation function with no easing support.
   * Use {@link lerp} instead!
   * @param a
   * @param b
   * @param t
   * @private
   */
  private lerpBase(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  /**
   * https://easings.net/#easeInOutQuart
   * @param x
   * @private
   */
  private easeOutCubic(x: number): number {
    return 1 - Math.pow(1 - x, 3);
  }

  /**
   * https://easings.net/#easeInOutQuint
   * @param x
   * @private
   */
  private easeInOutQuint(x: number): number {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  }

  /**
   * https://easings.net/#easeInQuart
   * @param x
   * @private
   */
  private easeInQuart(x: number): number {
    return x * x * x * x;
  }

  /**
   * lerp between two numbers by a value of t.
   * Supports optionally supplying an easing function.
   * @param a
   * @param b
   * @param t
   * @param easing
   * @private
   */
  private lerp(a: number, b: number, t: number, easing?: (x: number) => number): number {
    let eased: number;
    if (easing) {
      eased = easing(t);
    } else {
      eased = t;
    }
    return this.lerpBase(a, b, eased);
  }

  constructor(input: GoalDataPoint, target: GoalDataPoint, milestones: GoalDataPoint[]) {
    this.start = input;
    this.end = target;
    this.intermediate = milestones.sort((a, b) =>
      dayjs().year(a.year).month(a.month).diff(dayjs().year(b.year).month(b.month), 'month'),
    );
  }

  public getMilestoneAdjustedLine(findIntersectionFor?: number): {
    line: ILine;
    intersection: djs.Dayjs | undefined;
  } {
    const s = dayjs().year(this.start.year).month(this.start.month).startOf('month');
    const e = dayjs().year(this.end.year).month(this.end.month).startOf('month');

    // generate a basic line with all applicate dates, but with no proper data attached
    const line: {
      month: djs.Dayjs;
      real: boolean;
      type: string;
      data: {
        id: string;
        name: string;
        value: number;
        conversionRate: number;
      }[];
    }[] = getUnitsBetweenTwoDates(s, e, true, 'month').map((x) => {
      return {
        month: x,
        data: undefined,
        real: false,
        type: 'point',
      };
    });

    // attach out real start data and real end data, and mark both as so
    line[0].data = this.start.data.map((x) => ({
      value: x.value,
      name: x.funnelNode.name,
      id: x.funnelNode.id,
      conversionRate: x.conversionRate,
      real: true,
    }));
    line[line.length - 1].data = this.end.data.map((x) => ({
      value: x.value,
      name: x.funnelNode.name,
      id: x.funnelNode.id,
      conversionRate: x.conversionRate,
      real: true,
    }));
    line[0].real = true;
    line[0].type = 'input';
    line[line.length - 1].real = true;
    line[line.length - 1].type = 'goal';

    // then add all real intermediate milestones onto our in progress line, and mark them as real
    this.intermediate
      .filter((milestone) => milestone.type !== GoalDataType.SPIKE_MILESTONE)
      .forEach((intermediatePoint) => {
        const indexOnLine = line.findIndex((x) =>
          x.month.isSame(
            dayjs().year(intermediatePoint.year).month(intermediatePoint.month),
            'month',
          ),
        );
        line[indexOnLine].data = intermediatePoint.data.map((x) => ({
          value: x.value,
          name: x.funnelNode.name,
          id: x.funnelNode.id,
          conversionRate: x.conversionRate,
        }));
        line[indexOnLine].real = true;
      });

    /**
     * Loop thorough each item on the line.
     * Each point is either real (meaning it has actual data) or not real.
     *
     * We skip over real points because they already have data, but points that are
     * not marked as real need to have data inserted into them based on a lerp
     * between the last real point and the next real point. The lerp t value is based on
     * the distance between these two capping points.
     *
     * This has the effect of filling in the lines between real points with accurate lerping
     * values no matter the length of unreal point chunks.
     *
     * You could add easings here if you wanted!
     */
    let lastRealIndex = 0;
    line.forEach((linePoint, lineIdx) => {
      if (linePoint.real) {
        lastRealIndex = lineIdx;
      }
      if (linePoint.data === undefined) {
        const nextRealIndex = findIndex(line, (x) => x.data !== undefined && x.real, lineIdx);

        const last = line[lastRealIndex];
        const next = line[nextRealIndex];

        linePoint.data = last.data.map((x) => {
          const increment = 1 / (lineIdx - lastRealIndex + (nextRealIndex - lineIdx));
          const n = next.data.find((y) => y.id === x.id);
          return {
            id: x.id,
            name: x.name,
            value: this.lerp(x.value, n.value, (lineIdx - lastRealIndex) * increment),
            conversionRate: this.lerp(
              x.conversionRate,
              n.conversionRate,
              (lineIdx - lastRealIndex) * increment,
            ),
          };
        });
      }
    });

    // find all the spike points in our milestones
    const spikes = this.intermediate
      .filter((milestone) => milestone.type === GoalDataType.SPIKE_MILESTONE)
      .sort((a, b) =>
        dayjs().year(a.year).month(a.month).diff(dayjs().year(b.year).month(b.month), 'month'),
      );

    // apply each spike to the line
    spikes.forEach((spike) => {
      const found = line.find((linePoint) =>
        linePoint.month.isSame(dayjs().year(spike.year).month(spike.month), 'month'),
      );
      if (found) {
        found.data = spike.data.map((x) => ({
          value: x.value,
          name: x.funnelNode.name,
          id: x.funnelNode.id,
          conversionRate: x.conversionRate,
        }));
        found.real = true;
      }
    });

    const nodes = line[0].data.map((x) => x.id);
    const result: ILine = {};

    nodes.forEach(
      (node) =>
        (result[node] = line.map((n) => {
          return {
            x: n.month.format('YYYY-MM-DD'),
            // use conversion here instead of .value if you want conversion rates on the graph
            y: Math.max(n.data.filter((x) => x.id === node)[0].value, 0),
            real: n.real,
            baseline: 0,
            type: n.type,
          };
        })),
    );

    return { line: result, intersection: undefined };
  }
}
