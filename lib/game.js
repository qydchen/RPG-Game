const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');
const Party = require('./party/party');
const Battle = require('./battle/battle');

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

const party = new Party(Dave, John, Harry, Ash, Sly);
const monsterParty = new Party(...evil.creepsArr);
const battle = new Battle(party, monsterParty);
