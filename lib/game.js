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
// Dave.learnCombat('heroicStrike');
// Ash.viewStats();
// Harry.viewStats();
Harry.learn('Fireball');
Harry.learn('Icebolt');
Harry.learn('Thunderbolt');
Harry.learn('Cyclone');
Harry.learn('Earthquake');
// console.log(Harry.spellBook)
// Harry.learn('earthQuake');
// Harry.learn('cyclone');
// console.log(Harry.spellBook.Fireball.use);
John.viewStats();
Harry.spellBook.Fireball.use(Ash);
Harry.spellBook.Fireball.use(Ash);
Harry.spellBook.Fireball.use(Ash);
Harry.spellBook.Icebolt.use(Ash);
// Harry.spellBook.Fireball.use(Ash);
// Harry.spellBook.Thunderbolt.use(John);
// Harry.viewStats();
// Ash.viewStatus();
John.viewStats();
// Harry.spellBook.fireBall(Dave)
// Harry.viewStats();
Harry.spellBook.Earthquake.use(Ash, John, Sly, Dave);
// Harry.viewStats();
// Harry.spellBook.cyclone(Ash, John, Sly, Dave);
// Harry.spellBook.cyclone(Ash, John, Sly, Dave);
// Harry.spellBook.cyclone(Ash, John, Sly, Dave);
// Harry.spellBook.fireBall(Dave)
// Harry.spellBook.thunderBolt(Dave)
// Sly.learnCombat('backStab');
// Sly.learnCombat('eviscerate');
// Sly.viewStats();
// Dave.unequip('mainHand');
// Dave.equip(loot.sword.greatpapersword);
// Dave.viewInventory();
// Dave.combatAbilities.heroicStrike(Ash);
// Sly.equip(loot.bow.paperbow)
// Sly.equip(loot.sword.papersword)
// Sly.combatAbilities.backStab(Ash);
// Ash.viewStats();
// Sly.viewStats();
// Dave.viewStats();
// John.viewStats();
// Sly.viewInventory();
// Sly.combatAbilities.eviscerate(Ash);
// Harry.levelUp();
// Harry.viewStats();
// Ash.viewStats();
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
