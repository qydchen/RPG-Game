// class CombatAbility {
//   constructor(text) {
//     this.text
//   }
// }

const heroicStrike = function(npc) {

}

const aimedShot = function(npc) {

}

const riposte = function() {

}

const shieldBlock = function() {

}

const backStab = function(npc, comboPoint = 1) {
  // a move that ignores half the armor of the opponent
  let { atk } = this.stats;
  if (this.stats.hasOwnProperty('combo')) {
    console.log(`${this.name} gained ${comboPoint} combo point!`);
    this.stats.combo += comboPoint;
  }
  const damage = atk - (npc.stats.def / 2);
  npc.stats.hp -= damage;
  console.log(`${this.name} backstabs ${npc.name} for ${damage}!`);
  npc.checkDeath();
}

const eviscerate = function(npc) {
  // a finishing move that expends all combo points to deal x + 0.5 times the damage
  let { atk, combo } = this.stats;
  if (this.stats.hasOwnProperty('combo')) {
    this.stats.combo = 0;
  }
  const damage = ((combo + .5) * atk) - npc.stats.def;
  npc.stats.hp -= damage;
  console.log(`${this.name} eviscerates ${npc.name} for ${damage}!`);
  npc.checkDeath();
}

module.exports = {
  heroicStrike,
  aimedShot,
  riposte,
  shieldBlock,
  backStab,
  eviscerate,
}
