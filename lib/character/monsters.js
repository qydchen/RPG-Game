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

// { name: 'Goblin Chief', atk: 8, def: 2, spAtk: 0, maxHP: 32, spd: 3, level: 2 }
///
const genMonst = profile => {
  debugger
  const arr = Object.keys(profile);
  return arr.map(name => {
    let stats = Object.assign({}, profile);
    delete stats.name;
    return new Monster(profile.name, stats);
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
