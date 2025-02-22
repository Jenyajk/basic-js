const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats( domains) {
  let dom = domains.reduce((d, i) => {
    let dns = ''
    i.split('.').reverse().forEach(el => {
      dns +=`.${el}`;
      d[dns] = d[dns] ? d[dns] + 1 : 1;      
    });
    
    return d;
  }, {});
  return dom;
}

module.exports = {
  getDNSStats
};
