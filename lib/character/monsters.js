const { sample, shuffle } = require('../utils/utils');
const values = require('lodash/values');
const Character = require('./character');
const Party = require('../party/party');
const _ = require('./stats/monsterstats');
const { creeps, leaders, bosses } = _;

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

const creepsArr = generateMonsters(creeps);
const leadersArr = generateMonsters(leaders);
const bossesArr = generateMonsters(bosses);

const generateCreeps = () => {
  const creepCount = Math.floor(Math.random() * 4) + 2;
  const creeps = [];
  while (creeps.length < creepCount) {
    creeps.push(sample(creepsArr));
  }
  return creeps;
}

const generateMonsterParty = () => {
  let leader = sample(leadersArr);
  let monsterParty = [leader].concat(generateCreeps());
  return new Party (...shuffle(monsterParty));
}

module.exports = {
  generateMonsterParty,
};
