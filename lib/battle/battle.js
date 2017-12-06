const { viewChars } = require('../utils/utils');

class Battle {
  constructor(playerParty, monsterParty) {
    this.playerParty = playerParty.activeMembers;
    this.monsterParty = monsterParty.allMembers;
    this.participants = playerParty.activeMembers.concat(monsterParty.allMembers);
    this.arrangeBattleSequence();
  }

  viewPlayerParty() {
    viewChars(this.playerParty);
  }

  viewMonsters() {
    viewChars(this.monsterParty);
  }

  viewParticipants() {
    viewChars(this.participants);
  }

  arrangeBattleSequence() {
    this.participants.sort((charA, charB) => {
      return charB.stats.spd - charA.stats.spd;
    })
  }

}

module.exports = Battle;
