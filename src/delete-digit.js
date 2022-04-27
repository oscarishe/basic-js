const { NotImplementedError } = require('../extensions/index.js');

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
  let max = 0;
  let strNum = String(n);
  for(let i=0;i<strNum.length;i++){
  let str = strNum.substring(0, i) + '' + strNum.substring(i+1);
    if(Number(str)>=max)
    max = Number(str);
}
return max;
}

module.exports = {
  deleteDigit
};
