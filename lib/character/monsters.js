import { sample, shuffle, getAverage } from '../utils/utils';
import values from 'lodash/values';
import Character from './character';
import Party from '../party/party';
import { creeps, bosses } from './stats/monsterstats';

class Monster extends Character {
  constructor(name, stats) {
    super(name, stats);
  }
}

const genMonst = levelGroup => {
  const arr = Object.keys(levelGroup);
  return arr.map(name => {
    let inputs = values(levelGroup[name]);
    return new Monster(...inputs);
  });
}

const genMonstersByLevel = levelRange => { // levelRange will be an array that will represent the range of levels
  let creepsList = [];
  for (let i = levelRange[0]; i <= levelRange[1]; i++) {
    creepsList = creepsList.concat(genMonst(creeps[i]))
  }
  return creepsList;
}

const generateMonsterParty = levelRange => {
  const creepCount = Math.floor(Math.random() * 4) + 1;
  let monsterParty = [];
  let creepsList = genMonstersByLevel(levelRange);
  while (monsterParty.length <= creepCount) {
    let creep = sample(creepsList);
    monsterParty.push(creep);
  }
  console.log(monsterParty);
  return new Party(...shuffle(monsterParty));
}

export default generateMonsterParty;
