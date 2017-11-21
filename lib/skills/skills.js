const Skill = require('./skillFactory');
const _ = require('./constants');
const { COM, SPL, OFF, DEF, AOE, SIN, SELF, FIRE, ICE, WIND, SHOCK, PHYS, HOLY, DARK, GEN, SPE, NON } = _;
// Skill(name, type, subtype, targetProp, element, statuses = {}, skillType, resource, multiplier = 1, defMultiplier = 1)

// a generator that burns and damages opponent for 1x damage
const Fireball = new Skill('Fireball', SPL, OFF, SIN, FIRE, {BURN: true, FZN: false}, GEN, 10, 1, 1);
// a generator that ignores armor, slows opponent, and removes burn
const Icebolt = new Skill('Icebolt', SPL, OFF, SIN, ICE, {BURN: false, SLOW: true}, GEN, 8, 0.4, 0);
// a spender that damages opponent for 1.2x and paralyzes
const Thunderbolt = new Skill('Thunderbolt', SPL, OFF, SIN, SHOCK, {PAR: true}, SPE, 20, 1.2, 1);
// an AoE spender that damages opponents for 1.1x damage
const Cyclone = new Skill('Cyclone', SPL, OFF, AOE, WIND, {}, SPE, 28, 1.1, 1);
// an AoE spender that damages opponents for 1.3x damage
const Earthquake = new Skill('Earthquake', SPL, OFF, AOE, PHYS, {}, SPE, 36, 1.3, 1);

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
  Fireball,
  Icebolt,
  Thunderbolt,
  Cyclone,
  Earthquake,
  // cyclone: _.offensiveAction(cyclone),
  // earthQuake: _.offensiveAction(earthQuake),
  // smite: _.offensiveAction(smite),
  // harden: _.defensiveAction(harden),
  // arcaneIntellect: _.defensiveAction(arcaneIntellect),
  // holyMight: _.defensiveAction(holyMight),
  // flashHeal: _.defensiveAction(flashHeal),
  // renew: _.defensiveAction(renew),
  // greaterHeal: _.defensiveAction(greaterHeal),
  // revive: _.defensiveAction(revive),
}
