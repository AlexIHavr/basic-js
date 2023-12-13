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
  if (!Array.isArray(members)) return false;

  const mappedArr = [];

  for (const member of members) {
    if (typeof member === 'string') {
      const memberTrim = member.trim();
      mappedArr.push(memberTrim[0].toUpperCase() + memberTrim.slice(1));
    }
  }

  return mappedArr.sort().reduce((acc, member) => (member ? acc + member[0] : acc), '') || false;
}

module.exports = {
  createDreamTeam
};
