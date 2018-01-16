import Item from './item';

class Inventory {
  constructor(head = null, body = null, mainHand = null, offHand = null, twoHand = null) {
    this.head = head;
    this.body = body;
    this.mainHand = mainHand;
    this.offHand = offHand;
    this.twoHand = twoHand;
  }

  view() {
    this.slots().forEach(slot => {
      const item = this[slot];
      if (item) {
        console.log(slot.toUpperCase());
        item.view();
      }
    })
  }

  equip(item, slot) {
    const type = item.type;
    switch (type) {
      case 'oneHand':
        // for 1 handed weapons both can be wielded main and off hand,
        // user has to specify which hand to equip to
        if (this.twoHand) {
          if (slot === 'mainHand') {
            this.offHand = new Item('offHand');
          } else {
            this.mainHand = new Item('mainHand');
          }
        }
        this.twoHand = null;
        this[slot] = item;
        break;
      case 'twoHand':
        this.mainHand = null;
        this.offHand = null;
        this[type] = item;
        break;
      case 'mainHand':
        this[type] = item;
        break;
      case 'offHand':
        this[type] = item;
        break;
      default:
        this[type] = item;
    }
  }

  unequip(slot, swap = false) {
    if (slot === 'twoHand' && !swap) {
      this[slot] = null;
      this.mainHand = new Item('mainHand');
      this.offHand = new Item('offHand');
    } else if (swap) {
      this[slot] = null;
    } else {
      this[slot] = new Item(slot);
    }
  }

  getWeapon() {
    return this.twoHand ? [this.twoHand] : [this.mainHand, this.offHand];
  }

  slots() {
    return Object.getOwnPropertyNames(this);
  }
}

export default Inventory;
