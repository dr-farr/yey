import dayjs from "dayjs";

export interface LinePoint {
  x: string;
  y: number;
  baseline: number;
  type: string;
}

/**
 * Represents an object that contains all the data required for a line graph
 * in the simulator.
 */
export interface ILine {
  [p: string]: LinePoint[];
}

/**
 * Base functionality required for a line model to be used in truenorth,
 * Any implementations of a line model should be able to accept a series of
 * milestones and return an {@link ILine} that contains all relevant information
 * about the projection lines.
 */
export abstract class LineModel {
  /**
   * Produces the lines for a projection based on the input, target, and milestones
   * provided during class construction
   * @param findIntersectionFor
   */
  abstract getMilestoneAdjustedLine(findIntersectionFor?: number): {
    line: ILine;
    intersection: dayjs.Dayjs | undefined;
  };
}

/**
 * Class containing utility functions for inferring information about a
 * simulation line.
 */
export class LineAnalyser {
  /**
   * Get all months that are touched by a particular timeframe by at least one day
   * @param start
   * @param end
   * @private
   */
  public static getOverlappedMonths(
    start: dayjs.Dayjs,
    end: dayjs.Dayjs
  ): dayjs.Dayjs[] {
    if (start.isAfter(end)) {
      throw Error("start date cannot be before end date!");
    }
    const touchedMonths = [start.startOf("month")];
    let counter = 0;

    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (start.add(counter, "month").isSame(end, "month")) {
        break;
      }
      counter++;
      touchedMonths.push(start.add(counter, "month").startOf("month"));
    }
    return touchedMonths;
  }

  /**
   * Find the number of days in a given month are touched by a particular timeframe.
   *
   * For example, if you have a timeframe that is 22nd September -> 10th October,
   * and October is passed, you will expect to get a value of 10, for the 10
   * days in October that the provided timeframe overlaps.
   *
   * @param start the start of the timeframe being checked
   * @param end the end of the timeframe being checked
   * @param month the month to check the overlap of
   * @private
   */
  public static daysCoveredBy(
    start: dayjs.Dayjs,
    end: dayjs.Dayjs,
    month: dayjs.Dayjs
  ): number {
    const daysInMonth = month.daysInMonth();
    const startOfMonth = month.startOf("month");
    const endOfMonth = month.endOf("month");

    if (start.isSame(startOfMonth, "day") && end.isSame(endOfMonth, "day")) {
      return daysInMonth;
    }

    if (start.isBefore(startOfMonth) && end.isAfter(endOfMonth)) {
      return daysInMonth;
    }

    if (start.isAfter(startOfMonth) && end.isAfter(endOfMonth)) {
      return endOfMonth.diff(start, "day") + 1;
    }

    if (start.isAfter(startOfMonth) && end.isBefore(endOfMonth)) {
      return end.diff(start, "day");
    }

    if (start.isBefore(startOfMonth) && end.isBefore(endOfMonth)) {
      return end.diff(startOfMonth, "day") + 1;
    }

    if (start.isSame(startOfMonth, "day") && end.isBefore(endOfMonth)) {
      return end.diff(startOfMonth, "day") + 1;
    }

    if (start.isSame(startOfMonth, "day") && end.isAfter(endOfMonth)) {
      return daysInMonth;
    }

    return 0;
  }

  /**
   * Find the simulated amount projected on the graph for a particular KPI
   * on a particular month
   * @param line
   * @param month
   * @param kpi
   * @private
   */
  public static getKPIExpectation(
    line: ILine,
    month: dayjs.Dayjs,
    kpi: string
  ) {
    const lineKpi = line[kpi];
    if (lineKpi) {
      return (
        line[kpi].find((x) => dayjs(x.x).isSame(month, "month")) ?? line[kpi][0]
      ).y;
    }
    return 0;
  }

  /**
   * Find the simulated value of a KPI across an arbitrary timeframe in the simulation.
   *
   * This is useful to find out how much a campaign will need to return over the course
   * of it's run in comparison to the simulation.
   * @param line
   * @param start
   * @param end
   * @param kpi
   */
  public static expectedGrowthFromTimePeriod(
    line: ILine,
    start: dayjs.Dayjs,
    end: dayjs.Dayjs,
    kpi: string
  ) {
    const monthsCovered = this.getOverlappedMonths(start, end);

    const ret = monthsCovered.map((month) => {
      const daysInMonth = month.daysInMonth();
      const daysCovered = this.daysCoveredBy(start, end, month);
      return (
        (daysCovered / daysInMonth) * this.getKPIExpectation(line, month, kpi)
      );
    });

    return ret.reduce((acc, val) => acc + val, 0);
  }
}

export class TimeframeAnalyser {
  /**
   * Calculate the contribution of a campaign in relation to a specific start and end date.
   * This is primarily useful for finding out how a campaign's result value is proportional
   * to the timeframe of another campaign.
   * @param campaignStart start date of the campaign to inspect
   * @param campaignEnd end date of the campaign to inspect
   * @param timeframeStart start of the timeframe which this should be compared against
   * @param timeframeEnd end of the timeframe which this should be compared against
   * @param resultAverage the average return result of the campaign
   */
  public static getCampaignContributionOverTimeframe(
    campaignStart: dayjs.Dayjs,
    campaignEnd: dayjs.Dayjs,
    timeframeStart: dayjs.Dayjs,
    timeframeEnd: dayjs.Dayjs,
    resultAverage: number
  ) {
    /**
     * If the campaign's start and end dates are exactly the same as the timeframe,
     * the contribution is 100% of the campaign's return result. Simples!
     */
    if (
      campaignStart.isSame(timeframeStart, "day") &&
      campaignEnd.isSame(timeframeEnd, "day")
    ) {
      return resultAverage;
    }

    // # timeframe |-------|
    // # campaign    |---|
    /**
     * If the campaign's timescale is smaller than (and contained completely within)
     * the timeframe, the contribution is 100% of the return result due to it being totally
     * contained.
     */
    if (
      (campaignStart.isAfter(timeframeStart) ||
        campaignStart.isSame(timeframeStart, "day")) &&
      (campaignEnd.isBefore(timeframeEnd) ||
        campaignEnd.isSame(timeframeEnd, "day"))
    ) {
      return resultAverage;
    }

    const totalDaysOfCampaign = campaignEnd.diff(campaignStart, "day");

    // # timeframe |-------|
    // # campaign       |-------|
    /**
     * If the campaign starts within the timeframe but extends beyond the timeframe's end,
     * we need to produce a multiplier related to the number of days between the end of the timeframe
     * and the start of the campaign that represents the actual chunk of overlapped time
     * between the two timescales. This value can then be used on the return result
     * to produce the proportional value.
     */
    if (
      (campaignStart.isAfter(timeframeStart) ||
        campaignStart.isSame(timeframeStart, "day")) &&
      (campaignEnd.isAfter(timeframeEnd) ||
        campaignEnd.isSame(timeframeEnd, "day")) &&
      (campaignStart.isBefore(timeframeEnd) ||
        campaignStart.isSame(timeframeEnd, "day"))
    ) {
      const daysBetweenCampaignStartAndTimeframeEnd = timeframeEnd.diff(
        campaignStart,
        "day"
      );
      const multiplier =
        daysBetweenCampaignStartAndTimeframeEnd / totalDaysOfCampaign;
      return resultAverage * multiplier;
    }

    // # timeframe    |-------|
    // # campaign  |-------|
    /**
     * If the campaign starts before the timeframe's beginning but ends before the timeframe's end,
     * we need to produce a multiplier related to the number of days between the end of the timeframe
     * and the start of the campaign that represents the actual chunk of overlapped time
     * between the two timescales. This value can then be used on the return result
     * to produce the proportional value.
     */
    if (
      (campaignStart.isBefore(timeframeStart) ||
        campaignStart.isSame(timeframeStart, "day")) &&
      (campaignEnd.isBefore(timeframeEnd) ||
        campaignEnd.isSame(timeframeEnd, "day")) &&
      (campaignEnd.isAfter(timeframeStart) ||
        campaignEnd.isSame(timeframeStart, "day"))
    ) {
      const daysBetweenTimeframeStartAndCampaignEnd = campaignEnd.diff(
        timeframeStart,
        "day"
      );
      const multiplier =
        daysBetweenTimeframeStartAndCampaignEnd / totalDaysOfCampaign;
      return resultAverage * multiplier;
    }

    // # timeframe   |---|
    // # campaign  |--------|
    /**
     * If the campaign extends beyond the timeframe in both directions,
     * we need to produce a multiplier related to the number of days between the end of the timeframe
     * and the start of the timeframe that represents the actual chunk of overlapped time
     * between the two timescales. This value can then be used on the return result
     * to produce the proportional value.
     */
    if (
      (campaignStart.isBefore(timeframeStart) ||
        campaignStart.isSame(timeframeStart, "day")) &&
      (campaignEnd.isAfter(timeframeEnd) ||
        campaignEnd.isSame(timeframeEnd, "day"))
    ) {
      const daysInTimeframe = timeframeEnd.diff(timeframeStart, "day");
      const multiplier = daysInTimeframe / totalDaysOfCampaign;
      return resultAverage * multiplier;
    }
  }
}
