const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');

const loot = require('./items/loot');
const evil = require('./character/monster');

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

// const blob = new Monster('blob');
// blob.viewStats();
// Dave.viewStats();
// Dave.levelUp();
// John.levelUp()
// Harry.levelUp()
// Ash.levelUp();
// Sly.levelUp();
// Sly.viewStats()

// Harry.equip(Loot.loot.staff.paperstaff);
// Harry.viewStats();

// John.viewInventory();
// John.viewStats();
// John.equip(Loot.loot.dagger.papershiv, 'mainHand');
// John.equip(Loot.loot.dagger.papershiv, 'offHand');
// John.viewStats();
// Dave.viewStats();

// Dave.viewInventory();
// John.viewInventory();
// Harry.viewInventory();
// Ash.viewInventory();
// Sly.viewInventory();
