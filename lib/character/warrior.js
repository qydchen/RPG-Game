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

    this.stats.rage = 0;
  }

  generateRage(rageGen) {
    this.stats.rage += rageGen;
    if (this.stats.rage > 100) {
      this.stats.rage = 100;
    }
  }

  spendRage(rageCost) {
    if (this.hasRage(rageCost)) {
      this.stat.rage -= rageCost;
    } else {
      console.log('Not enough rage');
    }
  }

  hasRage(rageCost = 0) {
    return this.stats.rage >= rageCost;
  }


}

module.exports = Warrior;
