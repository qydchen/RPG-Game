import Warrior from './character/warrior';
import Hunter from './character/hunter';
import Mage from './character/mage';
import Cleric from './character/cleric';
import Rogue from './character/rogue';

// import Sprite from './animation/sprite.js';
// import PlayerParty from './party/playerParty';
// import Battle from './battle/battle';
// import Map from './map/map';
//
// import { loot } from './items/loot';
// import generateMonsterParty from './character/monsters';
//
//
// const party = new PlayerParty(Dave, John, Harry, Ash, Sly);
// const battle = new Battle(party, generateMonsterParty([1, 2]));

window.addEventListener("load", () => {
  let game = new Game();
})

class Game {
  constructor() {
    this.hunter = new Hunter('John');
    this.warrior = new Warrior('Dave');
    this.mage = new Mage('Harry');
    this.cleric = new Cleric('Ash');
    this.rogue = new Rogue('Sly');

    this.hunter.spawn();
    this.warrior.spawn();
    this.mage.spawn();
    this.cleric.spawn();
    this.rogue.spawn();

    window.addEventListener("click", () => {

    })
  }
}
