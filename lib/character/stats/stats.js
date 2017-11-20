const values = require('lodash/values');

class Stats {
  constructor(atk = 1, def = 1, spAtk = 1, maxHP = 10) {
    this.atk = atk;
    this.def = def;
    this.spAtk = spAtk;
    this.maxHP = maxHP;
    this.hp = maxHP;
    this.level = 1;
  }

  levelUp(statGain) {
    this.level += 1;
    this.view(...values(statGain));
    for (var stat in statGain) {
      if (stat === 'maxHP') {
        this.hp += statGain[stat];
      }
      this[stat] += statGain[stat];
    }

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

  healHP(health = 0) {
    if (!health) {
      this.hp = this.maxHP;
    } else {
      this.hp += health;
    }
  }

  stats() {
    return Object.getOwnPropertyNames(this);
  }
}

module.exports = Stats;
