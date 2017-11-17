const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');
const Loot = require('./items/loot');

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

// Dave.levelUp()
// John.levelUp()
// Harry.levelUp()

// Harry.equip(Loot.loot.staff.paperstaff);
// Harry.viewInventory();
// Harry.viewStats();

// John.viewInventory();
// John.viewStats();
// John.equip(Loot.loot.dagger.papershiv, 'mainHand');
// John.equip(Loot.loot.dagger.papershiv, 'offHand');
// John.viewInventory();
// John.viewStats();

// Dave.viewInventory();
// Dave.viewStats();

// Ash.viewInventory();

// Sly.viewInventory();
