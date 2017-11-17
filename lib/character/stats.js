let values = require('lodash/values');

class Stats {
  constructor(atk = 1, def = 1, spAtk = 1, hp = 10) {
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.hp = hp;
  }

  levelUp(statGain) {
    this.view(...values(statGain));
    this.stats().forEach(stat => {
      this[stat] += statGain[stat];
    });
  }

  view(...statGain) {
    this.stats().forEach((stat, i) => {
      if (statGain[i]) {
        console.log(`${stat}: ${this[stat]} + ${statGain[i]}`)
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
