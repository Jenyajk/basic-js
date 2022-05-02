const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(arr) {
  let r = [];
  arr.forEach(el => {
    if (r.indexOf(el) == -1){
      r.push(el)
    } else {
      let re = new RegExp(`${el}\\(\\d{1,}\\)$`);
      if (r.find(el => re.test(el)) == undefined) {
        r.push(el + '(1)');
      } else {
        let f = r.reverse().find(el => re.test(el));
        r.reverse();
        let newName = +f.match(/\(\d\)$/)[0].replace(/[\(\)]/g,'') + 1;
        r.push(`${el}(${newName})`);
      }
    }
  });

  return r;
}

module.exports = {
  renameFiles
};
