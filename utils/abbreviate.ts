/**
 * Abbreviate a name. For example, this will turn "Venture Harbour" into "VH"
 * @param name
 */
export const abbreviateName = (name: string): string => {
  return name
    .replace(/([A-Z])/g, " $1")
    .trim()
    .split(" ")
    .map((name) => name[0])
    .filter((name) => name !== undefined)
    .slice(0, 3)
    .join("")
    .toUpperCase();
};
