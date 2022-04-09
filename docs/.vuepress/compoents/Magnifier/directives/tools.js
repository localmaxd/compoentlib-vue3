export function getStyle(el, prob) {
  return parseInt(window.getComputedStyle(el, null)[prob]);
}
