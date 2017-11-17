const Character = require('./character');
const Stats = require('./stats');

class Hunter extends Character {
  constructor(name, stats) {
    super(name, stats);
    this.class = "Hunter";
    this.statGain = { atk: 4, def: 2, spAtk: 1, hp: 6 };
    this.stats = new Stats(9, 4, 0, 18);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);
    
    console.log(`${this.name} has spawned as a ${this.class}`);
  }
}

module.exports = Hunter;
