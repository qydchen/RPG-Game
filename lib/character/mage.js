const Character = require('./character');
const Stats = require('./stats/stats');
const Inventory = require('../items/inventory');
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

    this.stats.arcanePower = 0;
  }

  generatePower(arcanePowerGen) {
    this.stats.arcanePower += arcanePowerGen;
    if (this.stats.arcanePower > 100) {
      this.stats.arcanePower = 100;
    }
  }

  spendPower(arcanePowerCost) {
    if (this.hasPower(arcanePowerCost)) {
      this.stats.arcanePower -= arcanePowerCost;
    } else {
      throw 'Not enough Arcane Power';
    }
  }

  hasPower(arcanePowerCost = 0) {
    return this.stats.arcanePower >= arcanePowerCost;
  }


}


module.exports = Mage;
