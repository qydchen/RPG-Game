const Character = require('./character');
const Stats = require('./stats/stats');
const Loot = require('../items/loot');
const Talent = require('../skills/talenttree');

class Cleric extends Character {
  constructor(name) {
    super(name);
    this.role = "Cleric";
    this.statGain = { atk: 2, def: 2, spAtk: 3, maxHP: 6 };
    this.stats = new Stats(3, 3, 5, 18);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initClericInv);
    this.talents = Talent.cleric;

    this.stats.power = 5;
  }

  generatePower(powerGen) {
    this.stats.power += powerGen;
    if (this.stats.power > 5) {
      this.stats.power = 0;
    }
  }

  spendPower(powerCost) {
    if (this.hasPower(powerCost)) {
      this.stats.power -= powerCost;
    } else {
      throw 'Not enough Holy Power';
    }
  }

  hasPower(powerCost = 0) {
    return this.stats.power >= powerCost;
  }


}

module.exports = Cleric;
