const combatAtk = (offensiveMove) => {
  return function(...args) {
    offensiveMove.call(this, ...args);
    this.checkDeath(args[0]);
  }
}

const combatSelfDef = (defensiveMove) => {
  return function() {
    defensiveMove.call(this);
  }
}

const heroicStrike = function(npc, rage = 20) {
  // a move that does damage 1.5x atk dmg and generates rage
  let { atk } = this.stats;
  if (!this.inventory.mainHand) {
    console.log('You need a main-hand weapon')
    return;
  }
  this.generateRage(rage);
  const damage = Math.round(atk * 1.5) - npc.stats.def;
  npc.stats.hp -= damage;
  console.log(`${this.name} heroic strikes ${npc.name} for ${damage}!`);
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
  if (this.inventory.mainHand.subtype !== 'dagger' && this.inventory.offHand.subtype !== 'dagger') {
    console.log('You need to be dual-wielding daggers')
    return;
  }
  const damage = atk - (npc.stats.def / 2);
  npc.stats.hp -= damage;
  console.log(`${this.name} backstabs ${npc.name} for ${damage}!`);
  this.addCombo(comboPoint);
}

const eviscerate = function(npc) {
  // a finishing move that expends all combo points to deal x + 0.5 times the damage
  let { atk, combo } = this.stats;
  if (this.spendCombo(combo)) {
    const damage = ((combo + .5) * atk) - npc.stats.def;
    npc.stats.hp -= damage;
    console.log(`${this.name} eviscerates ${npc.name} for ${damage}!`);
  }
}

module.exports = {
  heroicStrike: combatAtk(heroicStrike),
  aimedShot: combatAtk(aimedShot),
  riposte: combatSelfDef(riposte),
  shieldBlock: combatSelfDef(shieldBlock),
  backStab: combatAtk(backStab),
  eviscerate: combatAtk(eviscerate),
}
