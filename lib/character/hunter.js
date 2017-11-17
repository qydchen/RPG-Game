const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Hunter extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Hunter";
    this.statGain = { atk: 4, def: 2, spAtk: 1, hp: 6 };
    this.stats = new Stats(8, 4, 0, 16);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    this.inventory = new Inventory(...Loot.initHunterInv);
    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}

module.exports = Hunter;
