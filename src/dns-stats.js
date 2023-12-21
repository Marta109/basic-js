const {NotImplementedError} = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

function getDNSStats(domains) {
  const result = {};
  let strDomains = "";
  domains.forEach((el) => {
    let item = el.split(".").reverse();
    item[0] = "." + item[0];
    strDomains += item.join(".");
    strDomains += ",";
  });

  domains = strDomains.split(",");

  for (let i = 0; i < domains.length; i++) {
    let domainsArr = domains[i].split(".");
    domainsArr.shift();
    let regexStr = "";
    for (let j = 0; j < domainsArr.length; j++) {
      regexStr += "." + domainsArr[j];
      //   if (regexStr === ".") {
      //     regexStr = "";
      //     continue;
      //   }
      if (result[regexStr] == undefined) {
        let regex = new RegExp(regexStr, "g");
        let machs = strDomains.match(regex);
        if (machs) {
          result[machs[0]] = machs.length;
        }
      }
    }
    regexStr = "";
  }

  return result;
}

module.exports = {
  getDNSStats,
};
