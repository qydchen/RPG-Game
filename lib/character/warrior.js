const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Warrior extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Warrior";
    console.log(`${this.name} has spawned as a ${this.class}`);
    this.statGain = { atk: 3, def: 3, spAtk: 0, hp: 8 };
    this.stats = new Stats(5, 5, 0, 20);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    Character.prototype.equipInitItems.apply(this, Loot.initWarriorInv);
  }

}

module.exports = Warrior;
