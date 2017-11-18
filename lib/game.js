const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');

const equip = require('./items/loot');
const evil = require('./character/monsters');
const combat = require('./skills/combatskills');
const spellbook = require('./skills/spells');
const perks = require('./skills/perks');

// const Dave = new Warrior('Dave');
// const John = new Hunter('John');
// const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

Sly.combatAbilities['backStab'] = combat['backStab'].bind(Sly);
Sly.combatAbilities['eviscerate'] = combat['eviscerate'].bind(Sly);
// console.log(Sly.abilities.backStab.call(Sly, Ash))
Ash.viewStats();
Sly.combatAbilities.backStab(Ash);
Sly.viewStats();
Ash.viewStats();
Sly.combatAbilities.eviscerate(Ash);
Sly.viewStats();
Ash.viewStats();


const { loot } = equip;

// Dave.equip(loot.dagger.papershiv,'mainHand');
// Dave.viewInventory();
// Dave.equip(loot.bow.paperbow);
// Dave.viewInventory();

// Dave.levelUp()
// Dave.viewStats();

// Harry.equip(loot.sword.papersword);
// Harry.viewInventory();
// Harry.viewStats();
// Harry.equip(loot.dagger.papershiv, 'offHand');
// Harry.viewInventory();

// John.viewInventory();
// John.viewStats();
// John.equip(loot.dagger.papershiv, 'mainHand');
// John.equip(loot.dagger.papershiv, 'offHand');
// John.viewStats();
// Dave.viewStats();

// Dave.viewInventory();
// John.viewInventory();
// Harry.viewInventory();
// Ash.viewInventory();
// Sly.viewInventory();
