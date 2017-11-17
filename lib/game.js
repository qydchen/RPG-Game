const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');

Dave.levelUp()
John.levelUp()
Harry.levelUp()
