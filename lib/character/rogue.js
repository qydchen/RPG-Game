const Character = require('./character');
const Stats = require('./stats/stats');
const Loot = require('../items/loot');
const Talent = require('../skills/talenttree');

class Rogue extends Character {
  constructor(name) {
    super(name);
    this.role = "Rogue";
    this.statGain = { atk: 4, def: 3, spAtk: 0, maxHP: 6 };
    this.stats = new Stats(8, 3, 1, 16);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initRogueInv);
    this.talents = Talent.rogue;

    this.stats.combo = 0;
  }

  generatePower(comboGen) {
    this.stats.combo += comboGen;
    if (this.stats.combo > 5) {
      this.stats.combo = 5;
    }
  }

  spendPower(comboCost) {
    if (this.hasPower(comboCost)) {
      this.stats.combo = 0;
    } else {
      throw 'Not enough combo points';
    }
  }

  hasPower(comboCost = 0) {
    return this.stats.combo >= comboCost;
  }


}

module.exports = Rogue;
