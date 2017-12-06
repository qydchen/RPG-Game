const { viewChars } = require('../utils/utils');

class Party {
  constructor(...members) {
    this.allMembers = members;
    this.activeMembers = members.slice(0, 3);
    this.inactiveMembers = members.slice(3);
  }

  viewActiveMembers() {
    console.log('All Active Party Members:');
    viewChars(this.activeMembers);
  }

  viewInactiveMembers() {
    console.log('All Inactive Party Members:');
    viewChars(this.inactiveMembers);
  }

  viewAllMembers() {
    console.log('All Party Members:');
    viewChars(this.allMembers);
  }

  swap(activeChar, inactiveChar) {
    let activeIdx = this.activeMembers.indexOf(activeChar);
    let inactiveIdx = this.inactiveMembers.indexOf(inactiveChar);
    try {
      if (activeIdx > -1 && inactiveIdx > -1) {
        this.activeMembers[activeIdx] = inactiveChar;
        this.inactiveMembers[inactiveIdx] = activeChar;
      } else {
        throw 'Invalid swap';
      }
    } catch(e) {
      console.log(e);
    }
  }

}

module.exports = Party;
