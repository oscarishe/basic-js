const { NotImplementedError } = require('../extensions/index.js');

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
 let dnsArray = [];
  for(let i=0;i<domains.length;i++) {
      let dotCounter = (domains[i].split(".").length - 1);
         if(dotCounter==1)
              {
              dnsArray.push(domains[i].substring(domains[i].lastIndexOf(".")));
              dnsArray.push("." + domains[i].substring(domains[i].lastIndexOf(".")+1) + "." + domains[i].substring(0, domains[i].lastIndexOf(".")));
              }
         if(dotCounter==2) {
              dnsArray.push(domains[i].substring(domains[i].lastIndexOf(".")));
              dnsArray.push("." + domains[i].substring(domains[i].lastIndexOf(".")+1) + domains[i].substring(domains[i].indexOf("."), domains[i].lastIndexOf(".")));
              dnsArray.push("." + domains[i].substring(domains[i].lastIndexOf(".")+1) + domains[i].substring(domains[i].indexOf('.'), domains[i].lastIndexOf(".")) + "." + domains[i].substring(0, domains[i].indexOf(".")));
              /*  */
         }
        
  }
  dnsArray = dnsArray.sort((a,b) =>a.length-b.length);
        let result = {};
        for (let i = 0; i < dnsArray.length; ++i)
        {
            if (result[dnsArray[i]] != undefined)
                ++result[dnsArray[i]];
            else
                result[dnsArray[i]] = 1;
        }
  return result;
}


module.exports = {
  getDNSStats
};
