const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Mage extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Mage";
    this.statGain = { atk: 1, def: 2, spAtk: 5, hp: 4 };
    this.stats = new Stats(1, 3, 12, 14);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    this.inventory = new Inventory(...Loot.initMageInv);
    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}


module.exports = Mage;
