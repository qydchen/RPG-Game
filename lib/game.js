import Warrior from './character/warrior';
import Hunter from './character/hunter';
import Mage from './character/mage';
import Cleric from './character/cleric';
import Rogue from './character/rogue';

import PlayerParty from './party/playerParty';
import Battle from './battle/battle';
import Map from './map/map';

import { loot } from './items/loot';
import generateMonsterParty from './character/monsters';

const Dave = new Warrior('Dave');
const John = new Hunter('John');
const Harry = new Mage('Harry');
const Ash = new Cleric('Ash');
const Sly = new Rogue('Sly');

const party = new PlayerParty(Dave, John, Harry, Ash, Sly);
const battle = new Battle(party, generateMonsterParty([1, 2]));

window.onload = function() {
  //  Note that this html file is set to pull down Phaser 2.5.0 from the JS Delivr CDN.
  //  Although it will work fine with this tutorial, it's almost certainly not the most current version.
  //  Be sure to replace it with an updated version before you start experimenting with adding your own code.
  var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });
  function preload() {
    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.spritesheet('warrior', './assets/warrior.png', 128, 140, 16);

  }

  function create() {
    var warrior = game.add.sprite(300, 200, 'warrior');
    //  Here we add a new animation called 'cast'
    //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'warrior' sprite sheet
    var cast = warrior.animations.add('cast');

    //  And this starts the animation playing by using its key ("cast")
    //  30 is the frame rate (30fps)
    //  true means it will loop when it finishes
    warrior.animations.play('cast', 30, true);
  }
};

// let game = new Map(10);
// game.viewMap();
//
// party.viewActiveMembers();
// party.viewInactiveMembers();
// party.swap(0,0)
// party.viewActiveMembers();
// party.viewInactiveMembers();
// party.swap(1,2)
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
