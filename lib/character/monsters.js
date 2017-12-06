const { sample, shuffle, getAverage } = require('../utils/utils');
const values = require('lodash/values');
const Character = require('./character');
const Party = require('../party/party');
const _ = require('./stats/monsterstats');
const { creeps, bosses } = _;

class Monster extends Character {
  constructor(name, ...stats) {
    super(name, ...stats);
  }
}

const genMonst = beastiary => {
  if (!beastiary) {
    return;
  }
  let arr = Object.keys(beastiary);
  return arr.map((name) => {
    let inputs = values(beastiary[name]);
    return new Monster(...inputs);
  });
}

const genMonstersByLevel = levelRange => { // levelRange will be an array that will represent the range of levels
  let creepsList = [];
  for (let i = levelRange[0]; i <= levelRange[1]; i++) {
    creepsList = creepsList.concat(values(genMonst(creeps[i])))
  }
  return creepsList;
}

const generateMonsterParty = levelRange => {
  let monsterParty = [];
  const creepCount = Math.floor(Math.random() * 4) + 2;
  let creepsList = genMonstersByLevel(levelRange);
  while (monsterParty.length <= creepCount) {
    monsterParty.push(sample(creepsList));
  }
  return new Party(...shuffle(monsterParty));
}

module.exports = {
  generateMonsterParty,
};
