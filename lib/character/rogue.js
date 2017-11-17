const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Rogue extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Rogue";
    this.statGain = { atk: 4, def: 3, spAtk: 0, hp: 6 };
    this.stats = new Stats(8, 5, 0, 18);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    this.inventory = new Inventory(...Loot.initRogueInv);
    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}

module.exports = Rogue;
