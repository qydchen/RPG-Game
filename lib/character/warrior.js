const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Warrior extends Character {
  constructor(name, stats, inventory) {
    super(name, stats, inventory);
    this.class = "Warrior";
    this.statGain = { atk: 3, def: 3, spAtk: 0, hp: 8 };
    this.stats = new Stats(6, 6, 0, 20);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    this.inventory = new Inventory(...Loot.initWarriorInv);
    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}

module.exports = Warrior;
