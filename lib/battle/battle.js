class Battle {
  constructor(playerParty, monsterParty) {
    this.playerParty = playerParty.activeMembers;
    this.monsterParty = monsterParty.allMembers;
    this.participants = playerParty.activeMembers.concat(monsterParty.allMembers);
    this.sequence = this.arrangeBattleSequence();
  }

  arrangeBattleSequence() {
    this.sequence = this.participants.sort((charA, charB) => {
      return charB.status.spd - charA.status.spd;
    })
  }

}

module.exports = Battle;
