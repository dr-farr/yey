/**
 * Interface for different strategies that can be provided for calculating
 * priority.
 */
interface PriorityCalculation {
  (impact: number, effort: number, confidence: number): number;
}

/**
 * Simple additive calculation that just sums the rating scores.
 * Ceil this up to prevent a max score of 99.
 * @param impact
 * @param effort
 * @param confidence
 */
const priorityCalculation: PriorityCalculation = (
  impact,
  effort,
  confidence
) => {
  const result = Math.ceil((impact + effort + confidence) * 6.6666);

  if (!isNaN(result)) {
    return result;
  }
};

export default priorityCalculation;
