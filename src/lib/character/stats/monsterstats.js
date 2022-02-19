// [atk, def, spAtk, hp]
export const creeps = {
  1: {
    blob: { name: 'Blob', atk: 5, def: 0, spAtk: 0, maxHP: 24, spd: 3, level: 1 },
    goblin: { name: 'Goblin', atk: 4, def: 1, spAtk: 0, maxHP: 20, spd: 5, level: 1 },
    ghoul: { name: 'Ghoul', atk: 4, def: 0, spAtk: 0, maxHP: 18, spd: 6, level: 1 },
  },
  2: {
    goblinchief: { name: 'Goblin Chief', atk: 8, def: 2, spAtk: 0, maxHP: 32, spd: 3, level: 2 },
    rabidghoul: { name: 'Rabid Ghoul', atk: 12, def: 2, spAtk: 0, maxHP: 30, spd: 8, level: 2 },
  },
  3: {
    goblinshaman: { name: 'Goblin Shaman', atk: 12, def: 4, spAtk: 0, maxHP: 40, spd: 12, level: 3 },
    zombie: { name: 'Zombie', atk: 15, def: 0, spAtk: 0, maxHP: 70, spd: 3, level: 3 },
    darkpuppet: { name: 'Dark Puppet', atk: 15, def: 20, spAtk: 0, maxHP: 34, spd: 10, level: 3 },
  },
  4: {
    wight: { name: 'Wight', atk: 20, def: 10, spAtk: 0, maxHP: 52, spd: 15, level: 4 },
    redimp: { name: 'Red Imp', atk: 18, def: 8, spAtk: 0, maxHP: 48, spd: 18, level: 4 },
    giantspider: { name: 'Giant Spider', atk: 24, def: 12, spAtk: 0, maxHP: 48, spd: 14, level: 4 },
  },
  5: {
    mimic: { name: 'Mimic', atk: 30, def: 14, spAtk: 0, maxHP: 60, spd: 15, level: 5 },
    ogrewarrior: { name: 'Ogre Warrior', atk: 26, def: 12, spAtk: 0, maxHP: 80, spd: 12, level: 5 },
  }
}

export const bosses = {
  butcher: { name: 'The Butcher', atk: 70, def: 30, spAtk: 0, maxHP: 500, spd: 1, level: 10 },
  alvin: { name: 'Alvin', atk: 200, def: 50, spAtk: 0, maxHP: 999, spd: 999, level: 15 },
}
