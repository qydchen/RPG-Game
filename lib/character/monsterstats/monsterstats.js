// [atk, def, spAtk, hp]
const creeps = {
  blob: { name: 'Blob', atk: 5, def: 0, spAtk: 0, hp: 20 },
  goblin: { name: 'Goblin', atk: 4, def: 1, spAtk: 0, hp: 16 },
  ghoul: { name: 'Ghoul', atk: 4, def: 0, spAtk: 0, hp: 12 },
}

const leaders = {
  goblinchief: { name: 'Goblin Chief', atk: 8, def: 2, spAtk: 0, hp: 32 },
}

const bosses = {
  butcher: { name: 'The Butcher', atk: 20, def: 10, spAtk: 0, hp: 200 },
}

module.exports = {
  creeps,
  leaders,
  bosses,
};
