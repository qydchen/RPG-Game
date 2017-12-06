class Party {
  constructor(...members) {
    this.allMembers = members;
    this.activeMembers = members.slice(0, 3);
    this.inactiveMembers = members.slice(3);
  }

  viewActiveMembers() {
    console.log('All Active Party Members:');
    this.view(this.activeMembers);
  }

  viewInactiveMembers() {
    console.log('All Inactive Party Members:');
    this.view(this.inactiveMembers);
  }

  viewAllMembers() {
    console.log('All Party Members:');
    this.view(this.allMembers);
  }

  view(members) {
    members.forEach(member => console.log(member.name));
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
