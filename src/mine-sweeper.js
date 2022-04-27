const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(mass) {
  let mineCounter=0;
  let resultMatrix= new Array(mass.length);
  for(let i=0;i<resultMatrix.length;i++) {
    resultMatrix[i] =(new Array(mass[0].length).fill(0));
  }
  for(let i=0;i<mass.length;i++) {
   
    for(let j=0;j<mass[i].length;j++) {
          if(i==0) {
            if(mass[i][j-1]==true)
              mineCounter++;
            if(mass[i][j+1]==true)
              mineCounter++;
            if (mass[i+1][j-1]==true)
              mineCounter++;
            if(mass[i+1][j]==true)
              mineCounter++;
            if (mass[i+1][j+1]==true)
              mineCounter++;
            resultMatrix[i][j]=mineCounter;
            mineCounter=0;
          }
          if(i==mass.length-1) {
            if(mass[i][j-1]==true)
              mineCounter++;
            if(mass[i][j+1]==true)
              mineCounter++;
            if (mass[i-1][j-1]==true)
              mineCounter++;
            if(mass[i-1][j]==true)
              mineCounter++;
            if (mass[i-1][j+1]==true)
              mineCounter++;
            resultMatrix[i][j]=mineCounter;
            mineCounter=0;
          }
          if(i!=mass.length-1 && i!=0) {
            if(mass[i][j-1]==true)
              mineCounter++;
            if(mass[i][j+1]==true)
              mineCounter++;
            if (mass[i-1][j-1]==true)
              mineCounter++;
            if(mass[i-1][j]==true)
              mineCounter++;
            if (mass[i-1][j+1]==true)
              mineCounter++;
            if (mass[i+1][j-1]==true)
              mineCounter++;
            if(mass[i+1][j]==true)
              mineCounter++;
            if (mass[i+1][j+1]==true)
              mineCounter++;
            resultMatrix[i][j]=mineCounter;
            mineCounter=0;
          }
    }
  }
  return resultMatrix;
}

module.exports = {
  minesweeper
};
