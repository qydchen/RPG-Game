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
  let game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create });

  function preload() {
    game.load.spritesheet('warrior', './assets/warrior.png', 128, 140, 16);
  }

  function create() {
    let warrior = game.add.sprite(300, 200, 'warrior');
    let attack = warrior.animations.add('attack');
    warrior.animations.play('cast', 16, true);
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
// Ash.learn('FlashHeal');
// Ash.learn('Smite');
// Ash.perform('Smite', Harry);
// Ash.perform('Smite', Harry);
// Harry.viewStats();
// Ash.cast('FlashHeal', Harry);
// Ash.cast('FlashHeal', Harry);
// Harry.viewStats();
// John.learn('CobraSting')
// Sly.learn('Tonic')
// John.perform("CobraSting", Sly)
// Sly.viewStatus()
// Sly.perform('Tonic')
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
