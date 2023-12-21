const {NotImplementedError} = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const dictionary = {};
  let result = [];
  for (let i = 0; i < names.length; i++) {
    dictionary[names[i]] === undefined
      ? (dictionary[names[i]] = 0)
      : (dictionary[names[i]] = ++dictionary[names[i]]);

    if (dictionary[names[i]] === 0) {
      result.push(names[i]);
    } else {
      result.push(names[i] + `(${dictionary[names[i]]})`);
      dictionary[result[result.length - 1]] === undefined
        ? (dictionary[result[result.length - 1]] = 0)
        : (dictionary[result[result.length - 1]] = ++dictionary[
            result[result.length - 1]
          ]);
    }
  }
  return result;
}

module.exports = {
  renameFiles,
};
