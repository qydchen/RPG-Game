import values from 'lodash/values';

class Stats {
  constructor(stats) {
    this.atk = stats.atk;
    this.def = stats.def;
    this.spAtk = stats.spAtk;
    this.maxHP = stats.maxHP;
    this.spd = stats.spd;
    this.hp = stats.maxHP;
    this.level = stats.level;
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

  healHP(health) {
    if (!health) {
      this.hp = this.maxHP;
    } else {
      this.hp += health;
      if (this.hp > this.maxHP) {
        this.hp = this.maxHP;
      }
    }
  }

  stats() {
    return Object.getOwnPropertyNames(this);
  }
}

export default Stats;
