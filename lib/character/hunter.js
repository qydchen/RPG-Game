const Character = require('./character');
const Stats = require('./stats/stats');
const Loot = require('../items/loot');
const Talent = require('../skills/talenttree');

class Hunter extends Character {
  constructor(name) {
    super(name);
    this.role = "Hunter";
    this.statGain = { atk: 4, def: 2, spAtk: 1, maxHP: 6 };
    this.stats = new Stats(8, 4, 0, 16);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initHunterInv);
    this.talents = Talent.hunter;

    this.stats.focus = 100;
  }

  generatePower(focusGen) {
    this.stats.focus += focusGen;
    if (this.stats.focus > 100) {
      this.stats.focus = 100;
    }
  }

  spendPower(focusCost) {
    if (this.hasPower(focusCost)) {
      this.stats.focus -= focusCost;
    } else {
      throw 'Not enough Focus';
    }
  }

  hasPower(focusCost = 0) {
    return this.stats.focus >= focusCost;
  }
}

module.exports = Hunter;
