const Character = require('./character');
const Stats = require('./stats');

class Monster extends Character {
  constructor(name) {
    super(name);
    this.spawnMessage();
  }

}

module.exports = Monster;
