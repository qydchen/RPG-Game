class Item {
  constructor(type, name = 'naked', atk = 0, def = 0, spAtk = 0, hp = 0) {
    this.name = name;
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.hp = hp;
    this.type = type;
  }

  view() {
    this.stats().forEach(stat => console.log(`${stat}: ${this[stat]}`));
  }

  stats() {
    return Object.getOwnPropertyNames(this);
  }
}

module.exports = Item;
