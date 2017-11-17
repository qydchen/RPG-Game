const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Cleric extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Cleric";
    console.log(`${this.name} has spawned as a ${this.class}`);
    this.statGain = { atk: 2, def: 2, spAtk: 3, hp: 6 };
    this.stats = new Stats(3, 3, 5, 18);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    Character.prototype.equipInitItems.apply(this, Loot.initClericInv);
  }

}

module.exports = Cleric;
