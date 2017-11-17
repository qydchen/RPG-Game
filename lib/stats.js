let values = require('lodash/values');

class Stats {
  constructor(atk = 1, def = 1, spAtk = 1, hp = 10) {
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.hp = hp;
  }

  levelUp() {
    let newStats = {atk: 3, def: 3, spAtk: 3, hp: 5};
    this.view(...values(newStats));
    this.stats().forEach(stat => {
      this[stat] += newStats[stat];
    });
  }

  view(...newStats) {
    this.stats().forEach((stat, i) => {
      if (newStats[i]) {
        console.log(`${stat}: ${this[stat]} + ${newStats[i]}`)
      } else {
        console.log(`${stat}: ${this[stat]}`)
      }
    });
    console.log('');
  }

  stats() {
    return Object.getOwnPropertyNames(this);
  }
}

module.exports = Stats;
