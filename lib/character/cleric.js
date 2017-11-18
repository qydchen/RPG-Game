const Character = require('./character');
const Stats = require('./stats/stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');

class Cleric extends Character {
  constructor(name) {
    super(name);
    this.role = "Cleric";
    this.statGain = { atk: 2, def: 2, spAtk: 3, maxHP: 6 };
    this.stats = new Stats(3, 3, 5, 18);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initClericInv);

  }

}

module.exports = Cleric;
