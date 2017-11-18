const heroicStrike = function(npc) {

}

const aimedShot = function(npc) {

}

const riposte = function() {

}

const shieldBlock = function() {

}

const backStab = function(npc) {
  // a move that ignores armor
  if (this.hasOwnProperty('combo')) {
    this.combo += 1;
  }
  const { atk } = this.stats;
  npc.stats.hp -= atk;
  npc.checkDeath();
  console.log(`${this.name} backstabs ${npc.name} for ${atk}!`)
}

module.exports = {
  heroicStrike,
  aimedShot,
  riposte,
  shieldBlock,
  backStab,
}
