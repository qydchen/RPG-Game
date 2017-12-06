const values = require('lodash/values');
const Character = require('./character');
const _ = require('./stats/monsterstats');

class Monster extends Character {
  constructor(name, ...stats) {
    super(name, ...stats);
  }
}

const generateMonsters = (dictionary) => {
  let arr = Object.keys(dictionary);
  return arr.map((name) => {
    let inputs = values(dictionary[name]);
    return new Monster(...inputs);
  })
}

const { creeps, leaders, bosses } = _;
const creepsArr = generateMonsters(creeps);
const leadersArr = generateMonsters(leaders);
const bossesArr = generateMonsters(bosses);

module.exports = {
  Monster,
  creepsArr,
  leadersArr,
  bossesArr,
};
