const Character = require('./character');
const Stats = require('./stats/stats');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');
const Talent = require('../skills/talenttree');

class Mage extends Character {
  constructor(name) {
    super(name);
    this.role = "Mage";
    this.statGain = { atk: 1, def: 2, spAtk: 5, maxHP: 4 };
    this.stats = new Stats(1, 3, 9, 14);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...Loot.initMageInv);
    this.talents = Talent.mage;

  }
}


module.exports = Mage;
