const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split("");
  let num = [...n];
  const arr = [];
  for (let i = 0; i < n.length; i++) {
    n[i] = "";
    n.join("");
    arr.push(Number(n.join("")));
    n[i] = num[i];
  }

  return Math.max(...arr);
}

module.exports = {
  deleteDigit,
};
