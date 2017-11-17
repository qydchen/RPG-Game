const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Mage extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Mage";
    console.log(`${this.name} has spawned as a ${this.class}`);
    this.statGain = { atk: 1, def: 2, spAtk: 5, hp: 4 };
    this.stats = new Stats(1, 3, 9, 14);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    Character.prototype.equipInitItems.apply(this, Loot.initMageInv);
  }

}


module.exports = Mage;
