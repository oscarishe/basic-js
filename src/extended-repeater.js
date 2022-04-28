const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str,options) {
    let separator = options.hasOwnProperty('separator') ? options.separator: "+";
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes: 1;
  let addition = options.hasOwnProperty('addition') ? options.addition: "";
  let additionRepeat = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let additionSeparator = options.hasOwnProperty('additionSeparator') && additionRepeat>1  ? options.additionSeparator : "|";
  let additionArray = Array(options.additionRepeatTimes);
  additionArray.fill(String(addition));
  
  let resultArray = Array(repeatTimes);
  resultArray.fill(str  + additionArray.join(additionSeparator));
  console.log(resultArray);
  return resultArray.join(separator);
}

module.exports = {
  repeater
};
