const Character = require('./character');
const Stats = require('./stats/stats');
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

  generatePower(rageGen) {
    this.stats.rage += rageGen;
    if (this.stats.rage > 100) {
      this.stats.rage = 100;
    }
  }

  spendPower(rageCost) {
    if (this.hasPower(rageCost)) {
      this.stats.rage -= rageCost;
    } else {
      throw 'Not enough rage';
    }
  }

  hasPower(rageCost = 0) {
    return this.stats.rage >= rageCost;
  }


}

module.exports = Warrior;
