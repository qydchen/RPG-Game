const _ = require('./utils');

const fireBall = function(npc, arcanePower = 10) {
  const { spAtk } = this.stats;
  this.generatePower(arcanePower);
  const damage = Math.round(spAtk * 1.4) - npc.stats.def;
  npc.stats.hp -= damage;
  console.log(`${this.name} casts fireball on ${npc.name} for ${damage}!`)
}

const iceBolt = function(npc) {

}

const thunderBolt = function(npc) {

}

const cyclone = function(...npc) {

}

const earthQuake = function(...npc) {

}

const harden = function(npc) {

}

const arcaneIntellect = function() {

}

const holyMight = function(npc) {

}

const smite = function(npc) {

}

const flashHeal = function(npc) {

}

const renew = function(npc) {

}

const greaterHeal = function(npc) {

}

const revive = function(npc) {

}

module.exports = {
  fireBall: _.offensiveAction(fireBall),
  iceBolt: _.offensiveAction(iceBolt),
  thunderBolt: _.offensiveAction(thunderBolt),
  cyclone: _.offensiveAction(cyclone),
  earthQuake: _.offensiveAction(earthQuake),
  smite: _.offensiveAction(smite),
  harden: _.defensiveAction(harden),
  arcaneIntellect: _.defensiveAction(arcaneIntellect),
  holyMight: _.defensiveAction(holyMight),
  flashHeal: _.defensiveAction(flashHeal),
  renew: _.defensiveAction(renew),
  greaterHeal: _.defensiveAction(greaterHeal),
  revive: _.defensiveAction(revive),
}
