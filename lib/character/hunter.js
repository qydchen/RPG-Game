const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Hunter extends Character {
  constructor(name) {
    super(name);
    this.role = "Hunter";
    this.statGain = { atk: 4, def: 2, spAtk: 1, hp: 6 };
    this.stats = new Stats(8, 4, 0, 16);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initHunterInv);
  }

}

module.exports = Hunter;
