const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr))
    throw new Error("'arr' parameter must be an instance of the Array!");
  let transformCounter=0;
  let counter =0;
  let limit = arr.length;
  if(arr[0]=='--discard-prev' || arr[0] == '--double-prev')
    counter=1;
  if(arr[arr.length-1]=='--double-next' || arr[arr.length-1]== '--discard-next')
    limit = arr.length-1;
  let transformArray = [];
  for(let i=counter;i<limit;i++) {
      if(arr[i]=='--discard-next') {
        transformCounter++;
        if(arr[i+2]=='--double-prev' || arr[i+2]=='--discard-prev')
          i=i+2;
        else 
          i++;
      }
      if(arr[i]=='--discard-prev') {
        transformArray.splice(i-1,1);
      }
      if(arr[i]=="--double-next") {
        transformCounter++;
        if(arr[i+2]=='--double-prev') {
          transformArray.splice(i,0,arr[i+1],arr[i+1],arr[i+1]);
          i=i+2;
        }
        else {
        transformArray.splice(i,0,arr[i+1]);
        i++;
      }
      }
      if(arr[i+1]=="--double-prev") {
        transformCounter++;
        transformArray.push(arr[i]);
        transformArray.push(arr[i]);
        i=i+2;
      }
  
      if(arr[i]!="--double-next" && arr[i]!="--double-prev" && arr[i]!="--discard-next" && arr[i]!="--discard-prev") {
        transformArray.push(arr[i]);
        }
       }
       if(arr.length>50)
        return arr;

  return transformArray;
}
// function transform(arr) {
//   if(!Array.isArray(arr))
//     throw new Error("'arr' parameter must be an instance of the Array!");
//   let transformArray = [];
//   for(let i=0;i<arr.length;i++) {
//       if(arr[i]=='--discard-next') {
//         arr.splice(i,2);
//       }
//       if(arr[i]=='--discard-prev') {
//         arr.splice(i-1,2);
//       }
//       if(arr[i]=="--double-next") {
//         arr[i]=arr[i+1];
//       }
//       if(arr[i]=="--double-prev") {
//         arr[i]=arr[i-1];
//       }
  
//       if(typeof arr[i]==='number') {
//         transformArray.push(arr[i]);
//         }
//        }
//   return arr;
// }
module.exports = {
  transform
};
