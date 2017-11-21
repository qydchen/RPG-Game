const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');

const equip = require('./items/loot');
const { loot } = equip;

const evil = require('./character/monsters');
const skills = require('./skills/skills');
const talenttree = require('./skills/talenttree');

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

// console.log(spellbook);
// console.log(combat);

// combat test / combo point test
John.learn('CobraShot')
John.learn('AimedShot')
John.learn('ExposingShot')
John.learn('FreezeTrap')
John.viewStats();
John.perform('AimedShot', Ash)
John.perform('CobraShot', Ash)
John.perform('ExposingShot', Sly)
John.perform('FreezeTrap', Dave, Harry, Sly)
// Ash.cast('Cure', John)
// Ash.cast('Revive', John)
// Dave.viewStatus();
// Harry.viewStatus();
John.viewStats();
// Ash.learn('Smite');
// Ash.perform('Smite', John)
// Ash.perform('Smite', John)
// Ash.perform('Smite', John)
// John.viewStats();
// John.viewStatus();
// Ash.cast('Revive', John)
// John.viewStats();
// John.viewStatus();
// Dave.learn('Harden')
// Dave.viewStats();
// Dave.perform('Harden')
// Dave.viewStats();

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
