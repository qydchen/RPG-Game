const { viewObj } = require('../utils/utils');

class Party {
  constructor(...members) {
    this.allMembers = members;
  }

  viewAllMembers() {
    console.log('All Party Members:');
    viewObj(this.allMembers);
  }

}

module.exports = Party;
