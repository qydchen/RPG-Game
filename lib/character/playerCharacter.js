import Character from './character';
import Inventory from '../items/inventory';
import Skills from '../skills/skills'

class PlayerCharacter extends Character {
  constructor(name) {
    super(name);
    this.inventory = new Inventory();
    this.combatAbilities = {};
    this.spellBook = {};
  }

  viewInventory() {
    this.inventory.view();
  }

  levelUp(statGain) {
    console.log(`${this.name} leveled up!`);
    this.stats.levelUp(statGain);
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
      default:
        if (this.inventory.twoHand) {
          this.unequip('twoHand', true);
        }
        this.unequip(type, true);
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

  unequip(slot, swap = false) { // unequip an item, default swap is false
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

  learn(skill) {
    let newSkill = Skills[skill];
    newSkill.belongsTo(this);
    newSkill.type === 'SPL' ? this.spellBook[skill] = newSkill : this.combatAbilities[skill] = newSkill;
    console.log(`${this.name} learned ${newSkill.name}!`);
  }

  cast(skill, ...args) {
    this.useSkill(skill, this.spellBook, 'spellbook', ...args);
  }

  perform(skill, ...args) {
    this.useSkill(skill, this.combatAbilities, 'combat ability', ...args);
  }

  useSkill(skill, abilities, txt, ...args) {
    try {
      if (abilities[skill]) {
        let ability = abilities[skill];
        return ability.use(...args);
      } else {
        throw `You do not have ${skill} as a ${txt}`;
      }
    } catch (e) {
      console.log(e);
    }
  }

}

export default PlayerCharacter;
