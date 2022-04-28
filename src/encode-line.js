const { NotImplementedError } = require('../extensions/index.js');

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
  let result="";
  let counter=0;
  let j=0;
  for(let i=0;i<str.length;i++) {
    counter=0;
    j=i;
    while(str[i]==str[j]) {
      counter++;
      j++;
    }
    i=j-1;
    result = result + ((counter>1 ? counter: "") + str[i]);          
  }
  return result;
}

module.exports = {
  encodeLine
};
