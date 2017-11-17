const Character = require('./character');
const Stats = require('./stats');

class Mage extends Character {
  constructor(name, stats) {
    super(name, stats);
    this.class = "Mage";
    this.statGain = { atk: 1, def: 2, spAtk: 5, hp: 4 };
    this.stats = new Stats(1, 3, 12, 14);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);

    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}

module.exports = Mage;
