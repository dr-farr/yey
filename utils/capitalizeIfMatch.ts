const capsArray = ["seo"];

const capitalizeIfMatch = (s) => {
  if (typeof s !== "string") {
    return "";
  }
  return capsArray.find((caps) => s === caps) ? s.toUpperCase() : s;
};

export default capitalizeIfMatch;
