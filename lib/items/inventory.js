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
        this.checkAndRemoveTwoHand()
        this[slot] = item;
        return true;
      case 'twoHand':
        this.mainHand = null;
        this.offHand = null;
        this[type] = item;
        return true;
      case 'mainHand':
        this.checkAndRemoveTwoHand();
        this[type] = item;
        this.offHand = new Item('offHand');
        return true;
      case 'offHand':
        this.checkAndRemoveTwoHand();
        this[type] = item;
        this.mainHand = new Item('mainHand')
        return true;
    }
    return false;
  }

  unequip(slot) {
    this[slot] = new Item(slot);
  }

  checkAndRemoveTwoHand() {
    if (this.twoHand) {
      this.twoHand = null;
      return true;
    }
    return false;
  }

  slots() {
    return Object.getOwnPropertyNames(this);
  }
}


module.exports = Inventory;
