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

const generateMonsters = (dictionary) => {
  var arr = Object.keys(dictionary);
  return arr.map((name) => (new Monster(...values(dictionary[name]))))
}

const creepsArr = generateMonsters(creeps);
const leadersArr = generateMonsters(leaders);
const bossesArr = generateMonsters(bosses);

module.exports = {
  Monster,
  creepsArr,
  leadersArr,
  bossesArr,
};
