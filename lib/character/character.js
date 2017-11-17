const Item = require('../items/item');
const Inventory = require('../items/inventory');
const Loot = require('../items/loot');
const Stats = require('./stats');

class Character {
  constructor(name, ...stats) {
    this.name = name;
    this.stats = new Stats(...stats);
    this.inventory = new Inventory();
    this.dead = false;
    this.equipInitItems();
  }

  levelUp(statGain) {
    console.log('');
    console.log(`${this.name} leveled up!`);
    this.stats.levelUp(statGain);
  }

  viewInventory() {
    this.inventory.view();
  }

  viewStats() {
    console.log('');
    console.log(`${this.name}'s character sheet:` );
    this.stats.view();
  }

  basicAttack(npc) {
    let damage = this.calcDamage(this.stats.atk, npc.stats.def);
    npc.stats.hp -= damage;
    npc.stats.hp = npc.stats.hp < 0 ? 0: npc.stats.hp;
    console.log('');
    console.log(`${this.name} attacks for ${damage} damage`)
    console.log(`${npc.name} HP: ${npc.stats.hp}`);
    this.checkDeath(npc);
  }

  calcDamage(atk, def) {
    return atk - def;
  }

  equip(item, slot) { // equip an item, slot is optional for onehand
    if (!item) {
      return;
    }
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
    const unequipItem = this.inventory[slot];
    if (!unequipItem) {
      return;
    } else if (unequipItem.name === 'naked') {
      return;
    }

    for (var stat in unequipItem) {
      if (stat === 'name' || stat === 'type') {
        continue;
      }
      this.stats[stat] -= unequipItem[stat];
    }
    this.inventory.unequip(slot, swap);
  }

  equipInitItems(...items) {
    // first condition will unpack the array to handle 1hand cases
    items.forEach(item => Array.isArray(item) ? this.equip(...item) : this.equip(item));
  }

  checkDeath(npc = this) {
    if (npc.isDead()) {
      npc.dead = npc.isDead();
      console.log('');
      console.log(`${npc.name} fainted!`);
    }
  }

  isDead() {
    return this.stats.hp <= 0 ? true : false;
  }

}

module.exports = Character;
