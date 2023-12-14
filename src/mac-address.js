const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const mac48Arr = String(n).split('-');
  const mac48Regex = /^[0-9]|[A-F]$/g;

  if (mac48Arr.length !== 6) return false;

  return mac48Arr.every(
    (item) => item.length === 2 && item[0].match(mac48Regex) && item[1].match(mac48Regex),
  );
}
module.exports = {
  isMAC48Address
};
