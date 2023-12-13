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
function getDNSStats(domains) {
  const result = {};
  const checkedDomains = {};

  domains.forEach((domain) => {
    domain
      .split('.')
      .reverse()
      .forEach((name, index, arr) => {
        const slicedName = domain.slice(domain.indexOf(name));

        if (!checkedDomains[slicedName]) {
          const resultSlicedName = `.${slicedName.split('.').reverse().join('.')}`;
          const searchName = arr.length - 1 === index ? slicedName : `.${slicedName}`;

          const domainCount = domains.reduce(
            (count, item) => (item.includes(searchName) ? ++count : count),
            0,
          );

          result[resultSlicedName] = domainCount;
          checkedDomains[slicedName] = slicedName;
        }
      });
  });

  return result;
}

module.exports = {
  getDNSStats
};
