const Item = require('./items/item');
const Inventory = require('./items/inventory');
const Loot = require('./items/loot');
const Stats = require('./stats');

class Character {
  constructor(name, atk = 1, def = 1, spAtk = 1, hp = 10) {
    this.name = name;
    this.stats = new Stats(atk, def, spAtk, hp)
    this.inventory = new Inventory();
    this.dead = false;
    console.log(`${this.name} has spawned`);
  }

  levelUp() {
    console.log('');
    console.log(`${this.name} leveled up!`);
    this.stats.levelUp();
  }

  viewInventory() {
    this.inventory.view();
  }

  viewStats() {
    console.log('');
    console.log(`${this.name}'s character sheet:` );
    this.stats.view();
  }

  attack(npc) {
    let damage = this.calcDamage(this.stats.atk, npc.stats.def);
    npc.stats.hp -= damage;
    npc.stats.hp = npc.stats.hp < 0 ? 0: npc.stats.hp;
    console.log('');
    console.log(`${this.name} attacks for ${damage} damage`)
    console.log(`${npc.name} HP: ${npc.stats.hp}`);
    if (npc.isDead()) {
      npc.dead = npc.isDead();
      console.log('');
      console.log(`${npc.name} fainted!`);
    }
  }

  calcDamage(atk, def) {
    return atk - def;
  }

  equip(item, slot) { // equip an item, slot is optional for onehand
    const type = item.type;
    switch (type) {
      case 'twoHand':
        this.unequip('mainHand', true);
        this.unequip('offHand', true);
        break;
      case 'oneHand':
        this.unequip(slot)
        break;
      case 'head':
        break;
      case 'body':
        break;
      default:
        if (this.inventory.twoHand) {
          this.unequip('twoHand', true);
        }
        break;
    }

    this.inventory.equip(item, slot);

    for (var stat in item) {
      if (stat === 'name' || stat === 'type') {
        continue;
      }
      this.stats[stat] += item[stat];
    }

    console.log('');
    console.log(`${this.name} equipped ${item.name}!`);
  }

  unequip(slot, swap) { // unequip an item, default swap is false
    if (this.inventory[slot] === null || this.inventory[slot].name === 'naked') {
      return;
    }
    const unequipItem = this.inventory[slot];
    for (var stat in unequipItem) {
      if (stat === 'name' || stat === 'type') {
        continue;
      }
      this.stats[stat] -= unequipItem[stat];
    }
    this.inventory.unequip(slot, swap);
  }

  isDead() {
    return this.stats.hp <= 0 ? true : false;
  }

}

let mainChar = new Character('David');
let monster = new Character('Slime', 5, 0, 0, 30);

// mainChar.equip(Loot.bow.woodenbow);
mainChar.equip(Loot.cloth.clothcap);
mainChar.equip(Loot.cloth.clotharmor);
mainChar.equip(Loot.sword.woodensword);
mainChar.equip(Loot.dagger.woodenshiv, 'mainHand');
mainChar.equip(Loot.dagger.woodenshiv, 'offHand');
// mainChar.unequip('mainHand');
// mainChar.equip(Loot.shield.woodenshield);
// mainChar.unequip('head');
// mainChar.unequip('body');
mainChar.viewInventory();
mainChar.viewStats();
mainChar.attack(monster);
mainChar.attack(monster);
mainChar.attack(monster);
mainChar.attack(monster);
mainChar.levelUp()
mainChar.viewStats();
