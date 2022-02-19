import { viewObj } from '../utils/utils';

class Party {
  constructor(...members) {
    this.allMembers = members;
  }

  viewAllMembers() {
    console.log('All Party Members:');
    viewObj(this.allMembers);
  }

}

export default Party;
