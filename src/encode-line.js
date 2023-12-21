const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return str;
  
  let counter = 0;
  let letter = str[0];
  let result = "";
  for (const char of str) {
    if (letter === char) {
      counter++;
    } else {
      result += counter > 1 ? counter + letter : letter;
      letter = char;
      counter = 1;
    }
  }
  if (!result.includes(letter) || result[result.length - 1] !== letter) {
    result += counter > 1 ? counter + letter : letter;
  }

  return result;
}

module.exports = {
  encodeLine,
};
