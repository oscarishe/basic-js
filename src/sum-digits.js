const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let stringNumber = String(n);
  let sum =0;
  for(let i=0;i<stringNumber.length;i++) {
      sum = sum + Number(stringNumber[i]);
      if(sum>=10) {
          let stringSum = String(sum);
          sum = Number(stringSum[0]) + Number(stringSum[1]);
          
      }
      }
  return sum;
}

module.exports = {
  getSumOfDigits
};
