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

window.onload = () => {
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext("2d");

  
}

// Dave.levelUp()
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
// Ash.viewStats();
// Ash.perform('Smite', Harry);
// Ash.perform('Smite', Harry);
// Ash.perform('Smite', Harry);
// Ash.learn('Revive');
// Ash.cast('Revive', Harry);
// Ash.viewStats();
// Ash.cast('FlashHeal', Harry);
// Ash.viewStats();
// Ash.cast('FlashHeal', Harry);
// Harry.viewStats();
// Ash.viewStats();
// Harry.viewStats();
// John.learn('CobraSting')
// Sly.learn('Tonic')
// John.perform("CobraSting", Sly)
// Sly.viewStatus()
// Sly.perform('Tonic')
// Dave.equip(loot.sword.greatpapersword);
// Dave.equip(loot.axe.paperhatchet, 'mainHand')
// Dave.equip(loot.axe.paperhatchet, 'offHand')
// Dave.equip(loot.sword.greatpapersword);
// Dave.equip(loot.axe.paperaxe, 'mainHand')
// Dave.viewStats();
// Dave.equip(loot.cloth.clothcap);
// Dave.equip(loot.cloth.clothcap);
// Dave.equip(loot.cloth.clothcap);
// Dave.equip(loot.cloth.clothcap);
// Dave.unequip('twoHand');
// Dave.viewInventory();
// Dave.viewStats();
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
