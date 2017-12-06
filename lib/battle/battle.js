const values = require('lodash/values');
const { viewArr } = require('../utils/utils');

class Battle {
  constructor(playerParty, monsterParty) {
    this.playerParty = values(playerParty.activeMembers);
    this.monsterParty = values(monsterParty.allMembers);
    this.participants = values(playerParty.activeMembers).concat(values(monsterParty.allMembers));
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

  wonBattle() {
    return this.isAllDead(this.monsterParty);
  }

  gameOver() {
    return this.isAllDead(this.playerParty);
  }

  isOver() {
    return (this.isAllDead(this.playerParty) || this.isAllDead(this.monsterParty));
  }

  isAllDead(partyArr) {
    return partyArr.every(char => char.isDead());
  }

}

module.exports = Battle;
