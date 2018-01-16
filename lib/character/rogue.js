import PlayerCharacter from './playerCharacter';
import Stats from './stats/stats';
import { initRogueInv } from '../items/loot';
import Talent from '../skills/talenttree';

class Rogue extends PlayerCharacter {
  constructor(name) {
    super(name);
    this.role = "Rogue";
    this.statGain = { atk: 4, def: 2, spAtk: 0, maxHP: 6, spd: 3 };
    this.stats = new Stats({ atk: 6, def: 4, spAtk: 0, maxHP: 16, spd: 7});
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...initRogueInv);
    this.talents = Talent.rogue;

    this.stats.combo = 0;
  }

  generatePower(comboGen) {
    this.stats.combo += comboGen;
    if (this.stats.combo > 5) {
      this.stats.combo = 5;
    }
  }

  spendPower() {
    if (this.hasPower()) {
      this.stats.combo = 0;
    } else {
      throw 'Not enough combo points';
    }
  }

  hasPower() {
    return this.stats.combo !== 0;
  }


}

export default Rogue;
