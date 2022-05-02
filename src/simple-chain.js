const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = { 
  chai : [],
  getLength() {
    return this.chai.length;
  },
  addLink(value) {
    this.chai.push(`( ${value} )`);
    return this;
  },
  removeLink(pos) {
    if (!Number.isInteger(pos) || pos-1 < 0 || pos-1 >= this.getLength()) {
      this.chai = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chai.splice(pos-1, 1);
    return this;
  },
  reverseChain() {
    this.chai.reverse();
    return this;
  },
  finishChain() {
    let str = this.chai.join('~~');
    this.chai = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
