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
  let sr = [];
  
  str.split('').forEach((el, index) => {
    if (el == str[index-1]) 
      return sr[sr.length-1][0] +=1;
    return sr.push([1, el]);
  });
  
  return sr.map(el => el.join('')).join('').replace(/1/g, '');

}

module.exports = {
  
  encodeLine
};
