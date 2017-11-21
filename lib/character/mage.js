const Character = require('./character');
const Stats = require('./stats/stats');
const Loot = require('../items/loot');
const Talent = require('../skills/talenttree');

class Mage extends Character {
  constructor(name) {
    super(name);
    this.role = "Mage";
    this.statGain = { atk: 1, def: 2, spAtk: 5, maxHP: 4 };
    this.stats = new Stats(1, 3, 9, 14);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initMageInv);
    this.talents = Talent.mage;

    this.stats.power = 0;
  }

  generatePower(powerGen) {
    this.stats.power += powerGen;
    if (this.stats.power > 100) {
      this.stats.power = 100;
    }
  }

  spendPower(powerCost) {
    if (this.hasPower(powerCost)) {
      this.stats.power -= powerCost;
    } else {
      throw 'Not enough Arcane Power';
    }
  }

  hasPower(powerCost = 0) {
    return this.stats.power >= powerCost;
  }


}


module.exports = Mage;
