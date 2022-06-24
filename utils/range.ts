export function* range(low: number, high: number) {
	let cursor = low - 1;
	while (cursor < high) {
		yield cursor += 1
	}
}

/**
 * Generate an inclusive range between 2 numbers
 * @param low
 * @param high
 * @constructor
 */
export default function Range(low: number, high: number): number[] {
	return [...range(low, high)]
}
