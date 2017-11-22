// [atk, def, spAtk, hp]
const creeps = {
  blob: { name: 'Blob', atk: 5, def: 0, spAtk: 0, maxHP: 20, spd: 3 },
  goblin: { name: 'Goblin', atk: 4, def: 1, spAtk: 0, maxHP: 16, spd: 5 },
  ghoul: { name: 'Ghoul', atk: 4, def: 0, spAtk: 0, maxHP: 12, spd: 6 },
}

const leaders = {
  goblinchief: { name: 'Goblin Chief', atk: 8, def: 2, spAtk: 0, maxHP: 32, spd: 3 },
}

const bosses = {
  butcher: { name: 'The Butcher', atk: 20, def: 10, spAtk: 0, maxHP: 200, spd: 1 },
  alvin: { name: 'Alvin', atk: 40, def: 30, spAtk: 0, maxHP: 500, spd: 30 },
}

module.exports = {
  creeps,
  leaders,
  bosses,
};
