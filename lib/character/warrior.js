const Character = require('./character');
const Stats = require('./stats/stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');
const Talent = require('../skills/talenttree');

class Warrior extends Character {
  constructor(name) {
    super(name);
    this.role = "Warrior";
    this.statGain = { atk: 3, def: 3, spAtk: 0, maxHP: 8 };
    this.stats = new Stats(5, 5, 0, 20);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initWarriorInv);
    this.talents = Talent.warrior;

    this.rage = 0;
  }

  hasRage(rage = 0) {
    if (this.rage > 100) {
      this.rage = 100;
    }
    return this.rage >= rage;
  }

  spendRage(rage) {
    if (this.hasRage(rage)) {
      this.rage -= rage;
    } else {
      console.log('Not enough rage');
    }
  }

}

module.exports = Warrior;
