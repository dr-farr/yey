/**
 * Moves an array item from one position in an array to another.
 * Note: This is a pure function so a new array will be returned,
 * instead of altering the array argument.
 *
 * @param {Array<T>} array - Array in which to move an item
 * @param {number} moveIndex - The index of the item to move
 * @param {number} toIndex - The index to move item at moveIndex to
 * @returns {Array<T>} The newly created array with the moved element
 */
export default function move<T>(array: Array<T>, moveIndex: number, toIndex: number): Array<T> {
const item = array[moveIndex];
  const length = array.length;
  const diff = moveIndex - toIndex;

  if (diff > 0) {
    // move left
    return [
      ...array.slice(0, toIndex),
      item,
      ...array.slice(toIndex, moveIndex),
      ...array.slice(moveIndex + 1, length),
    ];
  } else if (diff < 0) {
    // move right
    const targetIndex = toIndex + 1;
    return [
      ...array.slice(0, moveIndex),
      ...array.slice(moveIndex + 1, targetIndex),
      item,
      ...array.slice(targetIndex, length),
    ];
  }
  return array;
}
