const Character = require('./character');
const Stats = require('./stats/stats');
const Inventory = require('../items/inventory');
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

  }
}

module.exports = Hunter;
