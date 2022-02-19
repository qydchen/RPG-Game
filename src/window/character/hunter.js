import PlayerCharacter from './playerCharacter';
import Stats from './stats/stats';
import { initHunterInv } from '../items/loot';
import Talent from '../skills/talenttree';


class Hunter extends PlayerCharacter {
  constructor(name) {
    super(name);
    this.role = "Hunter";
    this.statGain = { atk: 4, def: 3, spAtk: 0, maxHP: 6, spd: 2 };
    this.stats = new Stats(7, 4, 0, 16, 16);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.talents = Talent.hunter;

    this.stats.focus = 100;

    this.spawnMessage(this.role);
    this.equipInitItems(...initHunterInv);
  }

  spawn() {
    this.initSprite({
      width: 30,
      height: 30,
      sx: 140,
      sy: 90,
      dx: 50,
      dy: 118,
    }, "../assets/hunter.png")
  }

  generatePower(focusGen) {
    this.stats.focus += focusGen;
    if (this.stats.focus > 100) {
      this.stats.focus = 100;
    }
  }

  spendPower(focusCost) {
    if (this.hasPower(focusCost)) {
      this.stats.focus -= focusCost;
    } else {
      throw 'Not enough Focus';
    }
  }

  hasPower(focusCost = 0) {
    return this.stats.focus >= focusCost;
  }
}

export default Hunter;
