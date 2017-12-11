import { sample, shuffle, getAverage } from '../utils/utils';
import values from 'lodash/values';
import Character from './character';
import Party from '../party/party';
import { creeps, bosses } from './stats/monsterstats';

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

export default generateMonsterParty;
