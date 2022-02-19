import values from 'lodash/values';
import { viewArr, getAverage } from '../utils/utils';

class Battle {
  constructor(playerParty, monsterParty) {
    this.playerParty = playerParty.activeMembers;
    this.monsterParty = monsterParty.allMembers;
    this.participants = playerParty.activeMembers.concat(monsterParty.allMembers);
    this.arrangeBattleSequence();
  }

  viewPlayerParty() {
    viewArr(this.playerParty);
  }

  viewMonsters() {
    viewArr(this.monsterParty);
  }

  viewParticipants() {
    viewArr(this.participants);
  }

  arrangeBattleSequence() {
    this.participants.sort((charA, charB) => charB.stats.spd - charA.stats.spd);
  }

  isOver() {
    return this.wonBattle() || this.gameOver();
  }

  wonBattle() {
    return this.isAllDead(this.monsterParty);
  }

  gameOver() {
    return this.isAllDead(this.playerParty);
  }

  isAllDead(partyArr) {
    return partyArr.every(char => char.isDead());
  }

}

export default Battle;
