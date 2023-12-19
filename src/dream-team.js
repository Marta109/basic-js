const {NotImplementedError} = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members) || !members || members.length === 0)
    return false;

  members = members.filter((name) => {
    if (typeof name === "string") {
      return name.trim();
    }
  });

  members = members.join(",").replace(/\s+/g, "").split(",");
  let teamName = "";
  members.forEach((name) => {
    teamName += name[0].toUpperCase();
  });

  return teamName.split("").sort().join("");
}

module.exports = {
  createDreamTeam,
};
