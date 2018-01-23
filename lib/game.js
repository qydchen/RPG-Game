import Warrior from './character/warrior';
import Hunter from './character/hunter';
import Mage from './character/mage';
import Cleric from './character/cleric';
import Rogue from './character/rogue';

import Sprite from './animation/sprite.js';
// import PlayerParty from './party/playerParty';
// import Battle from './battle/battle';
// import Map from './map/map';
//
// import { loot } from './items/loot';
// import generateMonsterParty from './character/monsters';
//
// const Dave = new Warrior('Dave');
// const Harry = new Mage('Harry');
// const Ash = new Cleric('Ash');
// const Sly = new Rogue('Sly');
//
// const party = new PlayerParty(Dave, John, Harry, Ash, Sly);
// const battle = new Battle(party, generateMonsterParty([1, 2]));

let John;
let Dave;
let Harry;
let Ash;
let Sly;
John = new Hunter('John');

document.addEventListener("DOMContentLoaded", () => {
  console.log(document.readyState);
  // Dave = new Warrior('Dave');
  // Harry = new Mage('Harry');
  // Ash = new Cleric('Ash');
  // Sly = new Rogue('Sly');
})
// SHOULD SCRATCH THE WAY I AM DOING this
// SHOULD NOT BE PASSING THE CONTEXT AROUND
// SHOULD CREATE A GAMEVIEW CLASS THAT HOLDS
// THE CONTEXT
window.addEventListener("load", () => {
  console.log(document.readyState);
  John.render();
  window.John = John;
})
