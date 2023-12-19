const {NotImplementedError} = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  try {
    if (!(date instanceof Date) || isNaN(date)) {
      throw new Error("Invalid date!");
    }
    date.getMonth();
  } catch (error) {
    throw new Error("Invalid date!");
  }

  let month = date.getMonth();
  if (month == 11 || (month >= 0 && month < 2)) return "winter";
  if (month >= 2 && month < 5) return "spring";
  if (month >= 5 && month < 8) return "summer";
  if (month >= 8 && month < 11) return "autumn";
}

module.exports = {
  getSeason,
};
