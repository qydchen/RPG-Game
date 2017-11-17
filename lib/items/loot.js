const Item = require('./item');
const loot = {
  sword: {
    woodensword: new Item('mainhand', 'Wooden Sword', 7, 0, 0),
  },

  axe: {

  },

  mace: {

  },

  bow: {

  },

  dagger: {
    woodenshiv: new Item('1hand', 'Wooden Shiv', 4, 0, 0),
  },

  polearm: {

  },

  shield: {
    woodenshield: new Item('offhand', 'Wooden Shield', 0, 5, 0),
  },

  cloth: {
    clothcap: new Item('head', 'Cloth Cap', 0, 0, 2),
    clotharmor: new Item('body', 'Cloth Armor', 0, 3, 3),
  },

  leather: {

  },

  mail: {

  },

  plate: {

  },
}

module.exports = loot;
