const Character = require('./character');
const Stats = require('./stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

// work on combo point
class Rogue extends Character {
  constructor(name) {
    super(name);
    this.role = "Rogue";
    this.statGain = { atk: 4, def: 3, spAtk: 0, maxHP: 6 };
    this.stats = new Stats(8, 3, 1, 16);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initRogueInv);

    this.stats.combo = 0;
  }

}

module.exports = Rogue;
