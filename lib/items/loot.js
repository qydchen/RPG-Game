const Item = require('./item');
const loot = {
  sword: {
    papersword: new Item('mainHand', 'Paper Sword', 4, 0, 0, 0),
  },

  axe: {

  },

  mace: {
    papermace: new Item('mainHand', 'Paper Mace', 3, 1, 0, 0),
  },

  bow: {
    paperbow: new Item('twoHand', 'Paper Bow', 4, 0, 0, 0),
  },

  dagger: {
    papershiv: new Item('oneHand', 'Paper Shiv', 3, 0, 0, 0),
  },

  polearm: {

  },

  shield: {
    papershield: new Item('offHand', 'Paper Shield', 0, 4, 0, 0),
  },

  cloth: {
    clothcap: new Item('head', 'Cloth Cap', 0, 0, 1, 2),
    clotharmor: new Item('body', 'Cloth Armor', 0, 1, 1, 2),
  },

  leather: {
    leathercap: new Item('head', 'Leather Cap', 1, 0, 0, 2),
    leatherarmor: new Item('body', 'Leather Armor', 1, 1, 0, 2),
  },

  mail: {
    mailcap: new Item('head', 'Mail Cap', 0, 1, 0, 1),
    mailarmor: new Item('body', 'Mail Armor', 0, 1, 0, 4),
  },

  plate: {
    platecap: new Item('head', 'Plate Cap', 0, 1, 0, 2),
    platearmor: new Item('body', 'Plate Armor', 0, 2, 0, 4),
  },

  staff: {
    paperstaff: new Item('twoHand', 'Paper Staff', 0, 3, 7, 0),
  },

  wand: {
    paperwand: new Item('mainHand', 'Paper Wand', 0, 0, 5, 0),
  },

  source: {
    paperskull: new Item('offHand', 'Paper Skull', 0, 2, 3, 0),
  },
}

const {cloth, leather, mail, plate, mace, wand, bow, shield, sword, source, dagger} = loot;
const initMageInv = [cloth.clothcap, cloth.clotharmor, wand.paperwand, source.paperskull];
const initHunterInv = [leather.leathercap, leather.leatherarmor, bow.paperbow];
const initClericInv = [mail.mailcap, mail.mailarmor, mace.papermace, shield.papershield];
const initWarriorInv = [plate.platecap, plate.platearmor, sword.papersword, shield.papershield];
const initRogueInv = [leather.leathercap, leather.leatherarmor, [dagger.papershiv, 'mainHand'], [dagger.papershiv, 'offHand']];

module.exports = {
  loot,
  initMageInv,
  initHunterInv,
  initWarriorInv,
  initClericInv,
  initRogueInv,
};
