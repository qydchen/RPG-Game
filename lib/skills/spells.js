const _ = require('./utils');

const fireBall = function(npc, powerCost = 10) {
  // a generator that burns and damages opponent for 1.5x
  const { spAtk } = this.stats;
  this.generatePower(powerCost);
  const damage = Math.round(spAtk * 1.1) - npc.stats.def;
  npc.stats.hp -= damage;
  npc.status.BURN = true;
  npc.status.FZN = false;
  console.log(`${this.name} casts fireball on ${npc.name} for ${damage}!`);
}

const iceBolt = function(npc, powerCost = 8) {
  // a generator that ignores armor, slows opponent, and removes burn
  const { spAtk } = this.stats;
  this.generatePower(powerCost);
  const damage = Math.round(spAtk * 0.7);
  npc.stats.hp -= damage;
  npc.status.SLOW = true;
  npc.status.BURN = false;
  console.log(`${this.name} casts icebolt on ${npc.name} for ${damage}`);
}

const thunderBolt = function(npc, powerCost = 20) {
  // a spender that damages opponent for 2.5x
  const { spAtk } = this.stats;
  try {
    this.spendPower(powerCost);
    const damage = Math.round(spAtk * 1.5) - npc.stats.def;
    npc.stats.hp -= damage;
    console.log(`${this.name} casts thunderbolt on ${npc.name} for ${damage}`);
  } catch(e) {
    console.log(e);
  };
}

const cyclone = function(powerCost = 28, ...npcs) {
  const { spAtk } = this.stats;
  try {
    this.spendPower(powerCost);
    npcs.forEach(npc => {
      const damage = Math.round(spAtk * 1.1) - npc.stats.def;
      npc.stats.hp -= damage;
    })
    console.log(`${this.name} casts cyclone`);
  } catch(e) {
    console.log(e);
  };
}

const earthQuake = function(powerCost = 36, ...npcs) {
  const { spAtk } = this.stats;
  try {
    this.spendPower(powerCost);
    npcs.forEach(npc => {
      const damage = Math.round(spAtk * 1.3) - npc.stats.def;
      npc.stats.hp -= damage;
    })
    console.log(`${this.name} casts earthquake`);
  } catch(e) {
    console.log(e);
  };
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
