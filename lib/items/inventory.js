const Item = require('./item');

class Inventory {
  constructor() {
    this.head = new Item('head');
    this.body = new Item('body');
    this.mainhand = new Item('right');
    this.offhand = new Item('left');
    this.twohand = null;
    this.ranged = null;
  }

  view() {
    this.slots().forEach(slot => {
      console.log('');
      const item = this[slot];
      if (item) {
        item.view();
      }
    })
  }

  equip(item, slot) {
    const type = item.type;
    switch (type) {
      case '1hand':
        // for 1 handed weapons both can be wielded main and off hand,
        // user has to specify which hand to equip to
        this[slot] = item;
        return true;
      case '2hand':
        this.mainhand = null;
        this.offhand = null;
        this[type] = item;
        return true;
      default:
        this[type] = item;
        return true;
    }
    return false;
  }

  slots() {
    return Object.getOwnPropertyNames(this);
  }
}


module.exports = Inventory;
