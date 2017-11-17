const values = require('lodash/values');

const Character = require('./character');
const Stats = require('./stats');
const _ = require('./monsterstats/monsterstats');

class Monster extends Character {
  constructor(name, ...stats) {
    super(name, ...stats);
  }
}

const { creeps, leaders, bosses } = _;
const Blob = new Monster(...values(creeps.blob));
const Goblin = new Monster(...values(creeps.goblin));
const Ghoul = new Monster(...values(creeps.ghoul));
const GoblinChief = new Monster(...values(leaders.goblinchief));
const Butcher = new Monster(...values(bosses.butcher));

const generateMonsters = (dictionary) => {
  var arr = Object.keys(dictionary);
  return arr.map((name) => (new Monster(...values(dictionary[name]))))
}

const creepsArr = generateMonsters(creeps);
const leadersArr = generateMonsters(leaders);
const bossesArr = generateMonsters(bosses);

module.exports = Monster;
