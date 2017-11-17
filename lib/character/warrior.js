const Character = require('./character');
const Stats = require('./stats');

class Warrior extends Character {
  constructor(name, stats) {
    super(name, stats);
    this.class = "Warrior";
    this.statGain = { atk: 3, def: 3, spAtk: 0, hp: 8 };
    this.stats = new Stats(6, 6, 0, 20);
    this.levelUp = Character.prototype.levelUp.bind(this, this.statGain);

    console.log(`${this.name} has spawned as a Warrior`);
  }
}

module.exports = Warrior;
