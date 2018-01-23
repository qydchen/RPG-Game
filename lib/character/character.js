import Stats from './stats/stats';
import Status from './stats/status';
import Sprite from '../animation/sprite';

class Character {
  constructor(name, stats) {
    this.name = name;
    this.stats = new Stats(stats);
    this.status = new Status();
  }

  initSprite(options, imageDir) {
    let image = new Image();
    image.src = imageDir;
    options.image = image;
    this.sprite = new Sprite(options);
    this.sprite.render();
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
