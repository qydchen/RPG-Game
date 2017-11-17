const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Rogue extends Character {
  constructor(name) {
    super(name);
    this.role = "Rogue";
    this.statGain = { atk: 4, def: 3, spAtk: 0, hp: 6 };
    this.stats = new Stats(8, 3, 1, 16);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initRogueInv);
  }

}

module.exports = Rogue;
