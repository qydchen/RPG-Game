const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Rogue extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Rogue";
    console.log(`${this.name} has spawned as a ${this.class}`);
    this.statGain = { atk: 4, def: 3, spAtk: 0, hp: 6 };
    this.stats = new Stats(8, 3, 1, 16);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    Character.prototype.equipInitItems.apply(this, Loot.initRogueInv);
  }

}

module.exports = Rogue;
