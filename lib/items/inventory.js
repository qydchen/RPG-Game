const Item = require('./item');

class Inventory {
  constructor() {
    this.head = new Item('head');
    this.body = new Item('body');
    this.mainHand = new Item('mainHand');
    this.offHand = new Item('offHand');
    this.twoHand = null;
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
        this[slot] = item;
        return true;
      case 'twoHand':
        this.mainHand = null;
        this.offHand = null;
        this[type] = item;
        return true;
      case 'mainHand':
        this[type] = item;
        this.offHand = new Item('offHand');
        return true;
      case 'offHand':
        this[type] = item;
        this.mainHand = new Item('mainHand');
        return true;
    }
    return false;
  }

  unequip(slot, swap = false) {
    swap ? this[slot] = null : this[slot] = new Item(slot);
  }

  slots() {
    return Object.getOwnPropertyNames(this);
  }
}


module.exports = Inventory;
