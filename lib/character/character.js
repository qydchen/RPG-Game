import Stats from './stats/stats';
import Status from './stats/status';

class Character {
  constructor(name, stats) {
    this.name = name;
    this.stats = new Stats(stats);
    this.status = new Status();
  }

  viewStats() {
    console.log(`${this.name}'s character sheet:` );
    this.stats.view();
  }

  viewStatus() {
    console.log(`${this.name}'s current status:` );
    this.status.view();
  }

  checkDeath(npc = this) {
    if (npc.isDead()) {
      npc.stats.hp = 0;
      npc.status.die();
      console.log(`${npc.name} fainted!`);
    }
  }

  isDead() {
    return this.stats.hp <= 0;
  }

  spawnMessage(...role) {
    if (!arguments.length) {
      console.log(`A ${this.name} has spawned`);
    } else {
      console.log(`${this.name} has spawned as a ${role[0]}`);
    }
  }

}

export default Character;
