const Item = require('./item');
const loot = {
  sword: {
    papersword: new Item('mainHand', 'sword', 'Paper Sword', 4, 0, 0, 0),
    greatpapersword: new Item('twoHand', 'sword', 'Great Paper Sword', 8, 0, 0, 2),
  },

  axe: {
    paperaxe: new Item('mainHand', 'axe', 'Paper Axe', 4, 0, 0, 0),
    papergreataxe: new Item('twoHand', 'axe', 'Paper Great Axe', 8, 0, 0, 2),
    paperhatchet: new Item('oneHand', 'axe', 'Paper Hatchet', 3, 0, 0, 0),
  },

  mace: {
    papermace: new Item('mainHand', 'mace', 'Paper Mace', 3, 1, 0, 0),
    papergreatmace: new Item('twoHand', 'mace', 'Paper Great Mace', 7, 2, 0, 0),
  },

  bow: {
    paperbow: new Item('twoHand', 'bow', 'Paper Bow', 9, 0, 0, 0),
  },

  dagger: {
    papershiv: new Item('oneHand', 'dagger', 'Paper Shiv', 3, 0, 0, 0),
  },

  polearm: {
    paperspear: new Item('twoHand', 'spear', 'Paper Spear', 8, 1, 0, 0),
  },

  shield: {
    papershield: new Item('offHand', 'shield', 'Paper Shield', 0, 4, 0, 0),
  },

  cloth: {
    clothcap: new Item('head', 'cloth', 'Cloth Cap', 0, 0, 1, 2),
    clotharmor: new Item('body', 'cloth', 'Cloth Armor', 0, 1, 1, 2),
  },

  leather: {
    leathercap: new Item('head', 'leather', 'Leather Cap', 1, 0, 0, 2),
    leatherarmor: new Item('body', 'leather', 'Leather Armor', 1, 1, 0, 2),
  },

  mail: {
    mailcap: new Item('head', 'mail', 'Mail Cap', 0, 1, 0, 1),
    mailarmor: new Item('body', 'mail', 'Mail Armor', 0, 1, 0, 4),
  },

  plate: {
    platecap: new Item('head', 'plate', 'Plate Cap', 0, 1, 0, 2),
    platearmor: new Item('body', 'plate', 'Plate Armor', 0, 2, 0, 4),
  },

  staff: {
    paperstaff: new Item('twoHand', 'staff', 'Paper Staff', 0, 2, 7, 0),
  },

  wand: {
    paperwand: new Item('mainHand', 'wand', 'Paper Wand', 0, 0, 4, 0),
  },

  source: {
    paperskull: new Item('offHand', 'source', 'Paper Skull', 0, 1, 3, 0),
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
