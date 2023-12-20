const {NotImplementedError} = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, counter = 0) {
    if (counter === 0 && Array.isArray(arr)) counter++;
    let maxDepth = counter;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const currentDepth = this.calculateDepth(arr[i], counter + 1);
        maxDepth = Math.max(maxDepth, currentDepth);
      }
    }

    return maxDepth;
  }
}

module.exports = {
  DepthCalculator,
};
