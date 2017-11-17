const Item = require('./item');
const loot = {
  sword: {
    woodensword: new Item('mainHand', 'Wooden Sword', 7, 0, 0),
  },

  axe: {

  },

  mace: {

  },

  bow: {
    woodenbow: new Item('twoHand', 'Wooden Bow', 7, 0, 0)
  },

  dagger: {
    woodenshiv: new Item('oneHand', 'Wooden Shiv', 4, 0, 0),
  },

  polearm: {

  },

  shield: {
    woodenshield: new Item('offHand', 'Wooden Shield', 0, 5, 0),
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

  source: {

  },
}

module.exports = loot;
