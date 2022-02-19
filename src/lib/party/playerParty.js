import Party from './party';
import { viewObj } from '../utils/utils';

class PlayerParty extends Party {
  constructor(...members) {
    super(...members);
    this.activeMembers = members.slice(0, 3);
    this.inactiveMembers = members.slice(3);
  }

  viewActiveMembers() {
    console.log('All Active Party Members:');
    viewObj(this.activeMembers);
  }

  viewInactiveMembers() {
    console.log('All Inactive Party Members:');
    viewObj(this.inactiveMembers);
  }

  swap(inactivePos, activePos) {
    const inactiveChar = this.inactiveMembers[inactivePos];
    const activeChar = this.activeMembers[activePos];
    this.activeMembers[activePos] = inactiveChar;
    this.inactiveMembers[inactivePos] = activeChar;
  }

  addMember(member) {
    this.allMembers.push(member);
    this.inactiveMembers.push(member);
  }

}

export default PlayerParty;
