const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');

const equip = require('./items/loot');
const { loot } = equip;

const evil = require('./character/monsters');
const combat = require('./skills/combatskills');
const spellbook = require('./skills/spells');
const talenttree = require('./skills/talenttree');

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

// combat test / combo point test
Dave.learnCombat('heroicStrike');
// Sly.learnCombat('backStab');
// Sly.learnCombat('eviscerate');
// Sly.viewStats();
// Ash.viewStats();
// Dave.unequip('mainHand');
Dave.equip(loot.sword.greatpapersword);
Dave.viewInventory();
Dave.combatAbilities.heroicStrike(Ash);
// Sly.equip(loot.bow.paperbow)
// Sly.equip(loot.sword.papersword)
// Sly.combatAbilities.backStab(Ash);
// Sly.viewStats();
// Dave.viewStats();
// Sly.viewInventory();
// Sly.combatAbilities.eviscerate(Ash);
Ash.viewStats();
// Ash.viewStatus();

// Ash.viewStats();

// Dave.learnCombat('backStab');
// Dave.learnCombat('eviscerate');
// Dave.combatAbilities.backStab(Ash);
// Dave.combatAbilities.eviscerate(Ash);
// Dave.viewStats();
// Ash.viewStats();

// inventory test

// Dave.equip(loot.dagger.papershiv,'mainHand');
// Dave.equip(loot.bow.paperbow);
// Dave.viewStats();
// Dave.unequip('twoHand')
// Dave.unequip('offHand')
// Dave.unequip('body')
// Dave.unequip('head')
// Dave.unequip('head')
// Dave.viewInventory();
// Dave.viewStats();
// works
// Dave.equip(loot.plate.platearmor);
// Dave.viewStats();

// Harry.equip(loot.sword.papersword);
// Harry.viewInventory();
// Harry.viewStats();
// Harry.equip(loot.dagger.papershiv, 'offHand');
// Harry.viewInventory();

// John.viewStats();
// John.viewInventory();
// John.equip(loot.dagger.papershiv, 'mainHand');
// John.equip(loot.dagger.papershiv, 'offHand');
// John.viewStats();
// John.viewInventory();

// Dave.viewInventory();
// John.viewInventory();
// Harry.viewInventory();
// Ash.viewInventory();
// Sly.viewInventory();
