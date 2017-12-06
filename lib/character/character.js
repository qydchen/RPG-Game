const Inventory = require('../items/inventory');
const Stats = require('./stats/stats');
const Status = require('./stats/status');
const Skills = require('../skills/Skills');

class Character {
  constructor(name, ...stats) {
    this.name = name;
    this.stats = new Stats(...stats);
    this.inventory = new Inventory();
    this.status = new Status();
    this.combatAbilities = {};
    this.spellBook = {};
  }

  levelUp(statGain) {
    console.log(`${this.name} leveled up!`);
    this.stats.levelUp(statGain);
  }

  viewInventory() {
    this.inventory.view();
  }

  viewStats() {
    console.log(`${this.name}'s character sheet:` );
    this.stats.view();
  }

  viewStatus() {
    console.log(`${this.name}'s current status:` );
    this.status.view();
  }

  equip(item, slot) { // equip an item, slot is optional param for onehand
    if (!item) {
      return;
    }
    const { type } = item;
    switch (type) {
      case 'twoHand':
        this.unequip('mainHand', true);
        this.unequip('offHand', true);
        break;
      case 'oneHand':
        if (this.inventory.twoHand) {
          this.unequip('twoHand', true);
        }
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
      switch(stat) {
        case 'name':
          break;
        case 'type':
          break;
        case 'subtype':
          break;
        case 'maxHP':
          this.stats[stat] += item[stat];
          this.stats.hp += item[stat];
          break;
        default:
          this.stats[stat] += item[stat];
          break;
      }
    }
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
      switch (stat) {
        case 'name':
          break;
        case 'type':
          break;
        case 'subtype':
          break;
        case 'maxHP':
          this.stats.hp -= unequipItem[stat];
          this.stats[stat] -= unequipItem[stat];
          break;
        default:
          this.stats[stat] -= unequipItem[stat];
      }

      if (this.stats.hp > this.stats.maxHP) { // unequipItem should decrement hp if maxHP is less
        this.stats.hp = this.stats.maxHP;
      } else if (this.stats.hp <= 0) {
        this.stats.hp = 1;
      }
    }
    this.inventory.unequip(slot, swap);
  }

  equipInitItems(...items) {
    // first condition will unpack the array to handle 1hand cases
    items.forEach(item => Array.isArray(item) ? this.equip(...item) : this.equip(item));
  }

  checkDeath(npc = this) {
    if (npc.isDead()) {
      npc.stats.hp = 0;
      npc.status.die();
      console.log(`${npc.name} fainted!`);
    }
  }

  isDead() {
    return this.stats.hp <= 0;
  }

  spawnMessage(...role) {
    if (!arguments.length) {
      console.log(`A ${this.name} has spawned`);
    } else {
      console.log(`${this.name} has spawned as a ${role[0]}`);
    }
  }

  learn(skill) {
    let newSkill = Skills[skill];
    newSkill.belongsTo(this);
    newSkill.type === 'SPL' ? this.spellBook[skill] = newSkill : this.combatAbilities[skill] = newSkill;
    console.log(`${this.name} learned ${newSkill.name}!`);
  }

  cast(skill, ...args) {
    try {
      if (this.spellBook[skill]) {
        let spell = this.spellBook[skill];
        return spell.use(...args);
      } else {
        throw `You do not have ${skill} in your spellbook`;
      }
    } catch (e) {
      console.log(e);
    }
  }

  perform(skill, ...args) {
    try {
      if (this.combatAbilities[skill]) {
        let ability = this.combatAbilities[skill];
        return ability.use(...args);
      } else {
        throw `You do not have ${skill} as a combat ability`;
      }
    } catch (e) {
      console.log(e);
    }
  }

}

module.exports = Character;
