/**
 * Deduplicate a list
 * @constructor
 */
export default function Dedup<T>(array: T[]): T[] {
  return [...new Set(array)];
}

/**
 * Concat two arrays and dedup them
 * @param array1
 * @param array2
 * @constructor
 */
export function DedupConcat<T>(array1: T[], array2: T[]): T[] {
  return Dedup(array1.concat(array2))
}
