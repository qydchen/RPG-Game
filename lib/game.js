// import Warrior from './character/warrior';
import Hunter from './character/hunter';
// import Mage from './character/mage';
// import Cleric from './character/cleric';
// import Rogue from './character/rogue';

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
document.addEventListener("DOMContentLoaded", () => {
  John = new Hunter('John');
})

window.onload = () => {
  John.spawn();
  window.John = John;
  // window.John.spawn();
}
