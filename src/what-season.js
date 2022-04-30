const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) throw new Error("Invalid date!");
   if (date.getMonth() == 0 ) {
    return 'winter'
  } else if (date.getMonth() == 1) {
    return 'winter'
  } else if (date.getMonth() == 2) {
    return 'spring'
  } else if (date.getMonth() == 3) {
    return 'spring'
  } else if (date.getMonth() == 4) {
    return 'spring'
  } else if (date.getMonth() == 5) {
    return 'summer'
  } else if (date.getMonth() == 6) {
    return 'summer'
  } else if (date.getMonth() == 7) {
    return 'summer'
  } else if (date.getMonth() == 8) {
    return 'autumn'
  } else if (date.getMonth() == 9) {
    return 'autumn'
  } else if (date.getMonth() == 10) {
    return 'autumn'
  } else if (date.getMonth() == 11) {
    return 'winter'
  } 
  if (date instanceof Date) {
    return true
  } else {'Invalid date!'}
  
} 

module.exports = {
  getSeason
};
