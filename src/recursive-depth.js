const { NotImplementedError } = require('../extensions/index.js');

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
    calculateDepth(mass) {

    let max = 0;  
    if (!Array.isArray(mass))
        return 0;
    for (let i=0;i<mass.length;i++) {
      let currDepth = this.calculateDepth(mass[i]);
      if(currDepth>=max)
        max= currDepth;
    }
        
    return max+1;
  }
}
module.exports = {
  DepthCalculator
};
