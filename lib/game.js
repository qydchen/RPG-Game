const Warrior = require('./character/warrior');
const Hunter = require('./character/hunter');
const Mage = require('./character/mage');
const Cleric = require('./character/cleric');
const Rogue = require('./character/rogue');

const PlayerParty = require('./party/playerParty');
const Battle = require('./battle/battle');
const Map = require('./map/map');

const equip = require('./items/loot');
const { loot } = equip;

const { generateMonsterParty } = require('./character/monsters');
const skills = require('./skills/skills');
const talenttree = require('./skills/talenttree');

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

const party = new PlayerParty(Dave, John, Harry, Ash, Sly);
const battle = new Battle(party, generateMonsterParty([1, 2]));

// let game = new Map(10);
// game.viewMap();

// party.viewActiveMembers();
// party.viewInactiveMembers();
//
// party.swap(0,0)
//
// party.viewActiveMembers();
// party.viewInactiveMembers();
//
// party.swap(1,2)
//
// party.viewActiveMembers();
// party.viewInactiveMembers();

// Dave.equip(loot.sword.greatpapersword);
// Dave.viewInventory();
// Harry.learn('Fireball');
// Harry.learn('Cyclone');
// Harry.cast('Fireball', battle.monsterParty[0]);
// Harry.cast('Fireball', battle.monsterParty[0]);
// Harry.cast('Fireball', battle.monsterParty[1]);
// Harry.cast('Fireball', battle.monsterParty[1]);
// Harry.cast('Fireball', battle.monsterParty[1]);
// Harry.cast('Fireball', battle.monsterParty[2]);
// Harry.cast('Cyclone', ...battle.monsterParty);
// battle.viewPlayerParty();
// Harry.cast('Fireball', battle.monsterParty[2]);
// Harry.cast('Fireball', battle.monsterParty[2]);
// Harry.viewStats();
// battle.viewPlayerParty();
// console.log(battle.partyLevel);
// battle.viewMonsters();
// battle.viewParticipants();
