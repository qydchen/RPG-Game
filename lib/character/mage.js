import PlayerCharacter from './playerCharacter';
import Stats from './stats/stats';
import { initMageInv } from '../items/loot';
import Talent from '../skills/talenttree';

class Mage extends PlayerCharacter {
  constructor(name) {
    super(name);
    this.role = "Mage";
    this.statGain = { atk: 0, def: 3, spAtk: 5, maxHP: 4, spd: 2 };
    this.stats = new Stats({atk: 0, def: 4, spAtk: 8, maxHP: 14, spd: 6});
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.spawnMessage(this.role);
    this.equipInitItems(...initMageInv);
    this.talents = Talent.mage;

    this.stats.power = 0;
  }

  generatePower(powerGen) {
    this.stats.power += powerGen;
    if (this.stats.power > 100) {
      this.stats.power = 100;
    }
  }

  spendPower(powerCost) {
    if (this.hasPower(powerCost)) {
      this.stats.power -= powerCost;
    } else {
      throw 'Not enough Arcane Power';
    }
  }

  hasPower(powerCost = 0) {
    return this.stats.power >= powerCost;
  }


}


export default Mage;
