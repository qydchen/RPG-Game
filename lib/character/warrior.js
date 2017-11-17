const Character = require('./character');
const Stats = require('./stats');

class Warrior extends Character {
  constructor(name, stats) {
    super(name, stats);
    this.stats = new Stats(6, 6, 0, 20);
    console.log(`${this.name} has spawned as a Warrior`);
  }
}

let Dave = new Warrior('Dav');
Dave.levelUp()
