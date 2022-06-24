/**
 * Get all keys from an object that are found in a predetermined list
 * @param value
 * @param keys
 */
const getKeys = <T>(value: T, keys: Array<keyof T>) => {
  return Object.entries(value).filter(([k]) => keys.includes(k as keyof T));
};

/**
 * Checks equality of multidimensional arrays
 * @param arr1
 * @param arr2
 */
const arraysAreIdentical = (arr1: Array<any>, arr2: Array<any>) => {
  if (arr1.length != arr2.length) {
    return false;
  }
  for (const i in arr1) {
    if (arr1[i] instanceof Array && arr2[i] instanceof Array) {
      if (!arraysAreIdentical(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] != arr2[i]) {
      return false;
    }
  }
  return true;
};

export enum Precedence {
  PrioritiseFirst,
  PrioritiseSecond,
}

/**
 * Merge two arrays and inject field information. Use this
 * wrapped by {@link mergeWithPreferenceWithKey} or {@link mergeWithPreferenceWithFn}
 * @param priority
 * @param nonPriority
 * @param matchingKeys
 * @param fieldInjection
 */
const mergeWithPreference = <T, P, M extends string>(
  priority: Array<T>,
  nonPriority: Array<T>,
  fieldInjection: { key: M; priorityValue: P; nonPriorityValue: P }
): Array<T & Record<M, P>> => {
  return [
    ...priority.map((x) => ({
      ...x,
      [`${fieldInjection.key}`]: fieldInjection.priorityValue,
    })),
    ...nonPriority.map((x) => ({
      ...x,
      [`${fieldInjection.key}`]: fieldInjection.nonPriorityValue,
    })),
  ] as Array<T & Record<M, P>>;
};

/**
 * Merges two arrays with one array having priority (and therefore not being overwritten)
 * over the other.
 *
 * This function will apply a specific property to each element in the merged array,
 * with a value depending on whether or not the item was considered a priority value or not.
 *
 * This function determines whether an item should overwrite it's counterpart by
 * checking the provided keys in the objects of the arrays. Equality between all provided
 * keys means a priority or non-priority counterpart was found in the other array.
 *
 * @example
 * ```
 * const priority = [
 *  {value: 100, year: 2022, month: 1},
 *  {value: 400, year: 2022, month: 4},
 * ]
 *
 * const nonPriority = [
 *  {value: 1, year: 2022, month: 1},
 *  {value: 2, year: 2022, month: 2},
 *  {value: 3, year: 2022, month: 3},
 *  {value: 4, year: 2022, month: 4},
 *  {value: 5, year: 2022, month: 5},
 * ]
 *
 * // we want to merge `priority` and `nonPriority`, but if an item in `priority`
 * // has the same key as an item in `nonPriority`, we want to use the `priority`
 * // array's values.
 * const merged = mergeWithPreferenceWithKey(priority, nonPriority, ["month", "year"], {key: "wasPriority", priorityValue: true, nonPriorityValue: false}, Precedence.PrioritiseFirst)
 *
 * console.log(merged)
 *
 * //  {value: 100, year: 2022, month: 1, wasPriority: true},
 * //  {value: 2, year: 2022, month: 2, wasPriority: false},
 * //  {value: 3, year: 2022, month: 3, wasPriority: false},
 * //  {value: 400, year: 2022, month: 4, wasPriority: true},
 * //  {value: 5, year: 2022, month: 5, wasPriority: false},
 * ```
 *
 * @param arr1
 * @param arr2
 * @param matchingKeys
 * @param fieldInjection
 * @param precedence
 * @returns an consisting of all merged elements of each constituent array
 */
export const mergeWithPreferenceWithKey = <T, P, M extends string>(
  arr1: Array<T>,
  arr2: Array<T>,
  matchingKeys: Array<keyof T>,
  fieldInjection: { key: M; priorityValue: P; nonPriorityValue: P },
  precedence: Precedence
): Array<T & Record<M, P>> => {
  const priority = precedence === Precedence.PrioritiseFirst ? arr1 : arr2;
  const nonPriority = precedence === Precedence.PrioritiseSecond ? arr1 : arr2;

  const priorityKeys = priority.map((priorityValue) =>
    getKeys(priorityValue, matchingKeys)
  );
  return mergeWithPreference(
    priority,
    nonPriority.filter((nonPriorityValue) => {
      const matchingPriority = priorityKeys.find((pKey) => {
        return arraysAreIdentical(
          pKey,
          getKeys(nonPriorityValue, matchingKeys)
        );
      });
      return !matchingPriority;
    }),
    fieldInjection
  );
};

/**
 * Merges two arrays with one array having priority (and therefore not being overwritten)
 * over the other.
 *
 * This function will apply a specific property to each element in the merged array,
 * with a value depending on whether or not the item was considered a priority value or not.
 *
 * This function determines whether an item should overwrite it's counterpart by
 * applying a provided equality function against each element.
 *
 * @example
 * ```
 * const priority = [
 *  {value: 100, date: dayjs()},
 *  {value: 400, date: dayjs().add(4, "month")},
 * ]
 *
 * const nonPriority = [
 *  {value: 1, date: dayjs()},
 *  {value: 2, date: dayjs().add(2, "month")},
 *  {value: 3, date: dayjs().add(3, "month")},
 *  {value: 4, date: dayjs().add(4, "month")},
 *  {value: 5, date: dayjs().add(5, "month")},
 * ]
 *
 * // we want to merge `priority` and `nonPriority`, but if an item in `priority`
 * // matches the counterpart in `nonPriority`, we want to use the `priority`
 * // array's values.
 * const merged = mergeWithPreferenceWithKey(priority, nonPriority, (valueA, valueB) => valueA.isSame(valueB, "month"), {key: "wasPriority", priorityValue: true, nonPriorityValue: false}, Precedence.PrioritiseFirst)
 *
 * console.log(merged)
 *
 * //  {value: 100, date: [date 0 months in future] wasPriority: true},
 * //  {value: 2, date: [date 2 months in future] wasPriority: false},
 * //  {value: 3, date: [date 3 months in future] wasPriority: false},
 * //  {value: 400, date: [date 4 months in future] wasPriority: true},
 * //  {value: 5, date: [date 5 months in future] wasPriority: false},
 * ```
 *
 * @param arr1
 * @param arr2
 * @param equalityFn
 * @param fieldInjection
 * @param precedence
 * @returns an consisting of all merged elements of each constituent array
 */
export const mergeWithPreferenceWithFn = <T, P, M extends string>(
  arr1: Array<T>,
  arr2: Array<T>,
  equalityFn: (a: T, b: T) => boolean,
  fieldInjection: { key: M; priorityValue: P; nonPriorityValue: P },
  precedence: Precedence
): Array<T & Record<M, P>> => {
  const priority = precedence === Precedence.PrioritiseFirst ? arr1 : arr2;
  const nonPriority = precedence === Precedence.PrioritiseSecond ? arr1 : arr2;

  return mergeWithPreference(
    priority,
    nonPriority.filter((nonPriorityValue) => {
      return (
        priority.find((priorityValue) => {
          return equalityFn(nonPriorityValue, priorityValue);
        }) === undefined
      );
    }),
    fieldInjection
  );
};
