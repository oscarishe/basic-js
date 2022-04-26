const { NotImplementedError } = require('../extensions/index.js');

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
    if(!Array.isArray(members))
      return false;
   members = members.filter(d => typeof d === 'string').map(function(x)
    {
     return x.toUpperCase().replace(/\s+/g, ' ').trim(); 
    });
    
    members.sort();
    console.log(members);
    let resultArray = [];
    for(let item of members)
        resultArray.push(item[0]);
    return resultArray.join('');
 }

module.exports = {
  createDreamTeam
};
