import PlayerCharacter from './playerCharacter';
import Stats from './stats/stats';
import { initMageInv } from '../items/loot';
import Talent from '../skills/talenttree';

class Mage extends PlayerCharacter {
  constructor(name) {
    super(name);
    this.role = "Mage";
    this.statGain = { atk: 0, def: 3, spAtk: 5, maxHP: 4, spd: 2 };
    this.stats = new Stats(0, 4, 8, 14, 6);;
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.talents = Talent.mage;

    this.stats.power = 0;

    this.spawnMessage(this.role);
    this.equipInitItems(...initMageInv);
  }

  spawn() {
    this.initSprite({
      width: 30,
      height: 35,
      sx: 5,
      sy: 5,
      dx: 20,
      dy: 114,
    }, "../assets/mage.png")
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
