class Stats {
  constructor(atk = 1, def = 1, hp = 10) {
    this.atk = atk;
    this.def = def;
    this.hp = hp;
  }

  levelUp() {
    this.stats().forEach(stat =>
      (stat === 'hp' ? this[stat] += 5 : this[stat] += 3)
    );
  }

  view() {
    this.stats().forEach(stat => console.log(`${stat}: ${this[stat]}`));
    console.log('');
  }

  stats() {
    return Object.getOwnPropertyNames(this);
  }
}

module.exports = Stats;
