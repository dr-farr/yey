import { Dayjs } from "dayjs";
import { Step } from "context/Strategy";

/**
 * Interface that holds information about useful metadata about a user's projection.
 */
export interface GoalReference {
  /**
   * The date the user has told us they want to achieve their goal
   */
  targetDate: Dayjs;
  /**
   * An array of datapoints that represent the funnel "input", or the values
   * they told us their funnel had when they created their projection.
   */
  startingPoint: Step[];
  /**
   * Whether or not this references a strategy editor or a milestone editor.
   * This value is computed from whether the month/year of the modal
   * matches the month/year of the goal
   */
  isStrategyEditor: boolean;
  /**
   * An array of year/month pairs that represent each point on which a milestone exists.
   * This is primarily useful for making decisions that depend on whether a real milestone exists or
   * not for a particular instance of the milestone modal
   */
  milestones: { year: number; month: number }[];
}
