import PlayerCharacter from './playerCharacter';
import Stats from './stats/stats';
import { initWarriorInv } from '../items/loot';
import Talent from '../skills/talenttree';

class Warrior extends PlayerCharacter {
  constructor(name) {
    super(name);
    this.role = "Warrior";
    this.statGain = { atk: 3, def: 3, spAtk: 0, maxHP: 8, spd: 2 };
    this.stats = new Stats(6, 5, 0, 20, 4);
    this.levelUp = this.levelUp.bind(this, this.statGain);
    this.talents = Talent.warrior;

    this.stats.rage = 0;

    this.spawnMessage(this.role);
    this.equipInitItems(...initWarriorInv);
  }

  spawn() {
    this.initSprite(
      {
        width: 30,
        height: 40,
        sx: 5,
        sy: 5,
        dx: 80,
        dy: 109,
      },
      "./assets/warrior.png"
    );
  }

  generatePower(rageGen) {
    this.stats.rage += rageGen;
    if (this.stats.rage > 100) {
      this.stats.rage = 100;
    }
  }

  spendPower(rageCost) {
    if (this.hasPower(rageCost)) {
      this.stats.rage -= rageCost;
    } else {
      throw 'Not enough rage';
    }
  }

  hasPower(rageCost = 0) {
    return this.stats.rage >= rageCost;
  }


}

export default Warrior;
