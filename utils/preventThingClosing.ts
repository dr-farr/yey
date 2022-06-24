import camelCase from "lodash/camelCase";

/**
 * Accepts the mousedown events from {@link OutsideAlerterProvider} or {@link useOutsideAlerter} callback and
 * searches it recursively to find the passed data attr.
 * If this attr exists, return true.
 * This should inform inner callbacks that the url params should not be reset
 * @param event
 * @param attr string to search for e.g. "data-prevent-thing-closing"
 */
export default function preventThingClosing(
  event: { target: any },
  attr: string = "data-prevent-sidepanel-close"
) {
  const dataIgnore = camelCase(attr.replace("data-", ""));
  let preventClose = false;
  let targetEl = event.target;
  while (targetEl !== null) {
    if (targetEl?.dataset[dataIgnore]) {
      preventClose = Boolean(targetEl.dataset[dataIgnore]);
      break;
    }
    targetEl =
      targetEl && targetEl.parentElement ? targetEl.parentElement : null;
  }
  return preventClose;
}
