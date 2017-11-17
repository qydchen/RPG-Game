const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Cleric extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Cleric";
    this.statGain = { atk: 2, def: 2, spAtk: 3, hp: 6 };
    this.stats = new Stats(9, 4, 0, 18);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    this.inventory = new Inventory(...Loot.initClericInv);
    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}

module.exports = Cleric;
