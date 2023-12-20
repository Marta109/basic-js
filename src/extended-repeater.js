const {NotImplementedError} = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(
//   str,
//   {
//     repeatTimes,
//     separator,
//     addition,
//     additionRepeatTimes,
//     additionSeparator,
//   } = options
// ) {
//   separator ? "" : (separator = "+");
//   if (
//     repeatTimes &&
//     !addition &&
//     !additionRepeatTimes &&
//     !additionSeparator
//   ) {
//     return str + "_0_".repeat(repeatTimes).replace("_0_", separator);
//   }

//   // options.separator ? "" : (options.separator = "+");
//   // options.additionSeparator ? "" : (options.additionSeparator = "|");
//   // if (!options.repeatTimes || !options.additionRepeatTimes) {
//   //   return str;
//   // }
//   // if (!options.addition) {
//   //   let strRevers = (String(str) + options.additionSeparator).repeat(
//   //     options.additionRepeatTimes
//   //   );
//   //   strRevers = strRevers.slice(
//   //     0,
//   //     strRevers.lastIndexOf(options.additionSeparator)
//   //   );
//   //   return strRevers;
//   // }

//   // let strRevers =
//   //   String(str) +
//   //   (String(options.addition) + options.additionSeparator).repeat(
//   //     options.additionRepeatTimes
//   //   );
//   // strRevers = strRevers.slice(
//   //   0,
//   //   strRevers.lastIndexOf(options.additionSeparator)
//   // );

//   // let result = (strRevers + options.separator).repeat(options.repeatTimes);
//   // return result.slice(0, result.lastIndexOf(options.separator));
// }

function repeater(
  str,
  {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options
) {
  separator ? "" : (separator = "+");
  str = String(str);
  addition !== undefined ? (addition += "") : "";

  if (repeatTimes && !additionRepeatTimes && !additionSeparator) {
    let newStr = "";
    if (addition) {
      newStr = (str + addition + separator).repeat(repeatTimes);
    } else {
      newStr = (str + separator).repeat(repeatTimes);
    }
    return newStr.slice(0, newStr.lastIndexOf(separator));
  } else if (
    !repeatTimes &&
    addition &&
    !additionRepeatTimes &&
    additionSeparator
  ) {
    return str + addition;
  }

  if (repeatTimes && addition && additionRepeatTimes) {
    additionSeparator ? "" : (additionSeparator = "|");
    let strRevers =
      String(str) +
      (String(addition) + additionSeparator).repeat(additionRepeatTimes);
    strRevers = strRevers.slice(
      0,
      strRevers.lastIndexOf(additionSeparator)
    );
    let result = (strRevers + separator).repeat(repeatTimes);
    return result.slice(0, result.lastIndexOf(separator));
  } else {
    return str;
  }
}

module.exports = {
  repeater,
};
