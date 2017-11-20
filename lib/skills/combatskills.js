const _ = require('./utils');

const heroicStrike = function(npc, rage = 20) {
  // a move that does damage 1.5x atk dmg and generates rage
  let { atk } = this.stats;
  const { mainHand, offHand, twoHand} = this.inventory;
  try {
    if (!mainHand.subtype || !twoHand.subtype) {
      console.log('You need a main-hand or two-handed weapon')
      return;
    }
  } catch (e) { // if it throws an error then we know that there is
    // either a mainHand or twoHand;
    this.generateRage(rage);
    const damage = Math.round(atk * 1.5) - npc.stats.def;
    npc.stats.hp -= damage;
    console.log(`${this.name} heroic strikes ${npc.name} for ${damage}!`);
  }
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
  const { mainHand, offHand, twoHand} = this.inventory;
  // if mainHand.subtype doesn't throw an error calling 'null.subtype' then still
  // we are checking if the subtype is not a 'dagger'
  try {
    if (mainHand.subtype !== 'dagger' || offHand.subtype !== 'dagger') {
      console.log('You need to be dual-wielding daggers');
      return;
    }
  } catch (e) { // if it throws an error then we know that there is a twoHand being wielded
    console.log('You need to be dual-wielding daggers');
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
  heroicStrike: _.offensiveAction(heroicStrike),
  aimedShot: _.offensiveAction(aimedShot),
  riposte: _.defensiveAction(riposte),
  shieldBlock: _.defensiveAction(shieldBlock),
  backStab: _.offensiveAction(backStab),
  eviscerate: _.offensiveAction(eviscerate),
}
