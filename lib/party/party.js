const { viewObj } = require('../utils/utils');

class Party {
  constructor(...members) {
    this.allMembers = this.populate(members);
    this.activeMembers = this.populate(members.slice(0, 3));
    this.inactiveMembers = this.populate(members.slice(3));
  }

  populate(members) {
    let party = {};
    members.forEach((member, i) => {
      party[i] = member;
    })
    return party;
  }

  viewActiveMembers() {
    console.log('All Active Party Members:');
    viewObj(this.activeMembers);
  }

  viewInactiveMembers() {
    console.log('All Inactive Party Members:');
    viewObj(this.inactiveMembers);
  }

  viewAllMembers() {
    console.log('All Party Members:');
    viewObj(this.allMembers);
  }

  swap(inactiveChar, activeChar) {
    this.activeMembers[inactiveChar.name] = inactiveChar;
    this.inactiveMembers[activeChar.name] = activeChar;
    delete this.activeMembers[activeChar.name];
    delete this.inactiveMembers[inactiveChar.name];
  }

}

module.exports = Party;
