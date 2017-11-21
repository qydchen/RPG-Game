const Skill = require('./skillFactory');
const _ = require('./constants');
const { COM, SPL, MIX, OFF, DEF, AOE, SIN, SELF, FIRE, ICE, WIND, SHOCK, PHYS, HOLY, DARK, GEN, SPE, NON } = _;
// Skill(name, type, subtype, targetProp, element, statuses = {}, skillType, resource, multiplier = 1, defMultiplier = 1)

// a generator that burns and damages opponent for 1.1x damage
const Fireball = new Skill('Fireball', SPL, OFF, SIN, FIRE, {BURN: true, FZN: false}, GEN, 10, 1.1, 1);
// a generator that ignores armor, slows opponent, and removes burn
const Icebolt = new Skill('Icebolt', SPL, OFF, SIN, ICE, {BURN: false, SLOW: true}, GEN, 8, 0.4, 0);
// a spender that damages opponent for 1.2x and paralyzes
const Thunderbolt = new Skill('Thunderbolt', SPL, OFF, SIN, SHOCK, {PAR: true}, SPE, 20, 1.2, 1);
// an AoE spender that damages opponents for 1.1x damage
const Cyclone = new Skill('Cyclone', SPL, OFF, AOE, WIND, {}, SPE, 28, 1.1, 1);
// an AoE spender that damages opponents for 1.3x damage
const Earthquake = new Skill('Earthquake', SPL, OFF, AOE, PHYS, {}, SPE, 36, 1.3, 1);
// a combat self buff that adds 4x level modifier to the performer's def
const Harden = new Skill('Harden', COM, DEF, SELF, PHYS, {}, NON, 0, 0, 4, ['def']);
// a self buff that adds 4x level modifier to the caster's spAtk
const ArcaneIntellect = new Skill('Arcane Intellect', SPL, DEF, SELF, PHYS, {}, NON, 0, 0, 4, ['spAtk'])
// a self buff that adds 4x level modifier to the caster's atk
const HolyMight = new Skill('Holy Might', SPL, DEF, SELF, HOLY, {}, NON, 0, 0, 4, ['atk']);
// a spender that damages opponents for 1.2x damage. modifier is based on the user's atk and spAtk combined
const Smite = new Skill('Smite', MIX, OFF, SIN, HOLY, {}, SPE, 1, 1.2, 1)
// a healing generator that heals a target for 2x the caster's spAtk
const FlashHeal = new Skill('Flash Heal', SPL, DEF, SIN, HOLY, {}, GEN, 1, 1.5, 0, ['hp'])
// a healing spender that greatly heals a target for 2.2x the caster's spAtk
const GreaterHeal = new Skill('Greater Heal', SPL, DEF, SIN, HOLY, {}, SPE, 1, 2.2, 0, ['hp'])
// a spender that spends 2 holy power to ressurect a character from the grave and heal it for 2x spAtk
const Revive = new Skill('Revive', SPL, DEF, SIN, HOLY, {DEAD: false}, SPE, 2, 2, 0, ['hp'])
// a spender that spends 5 holy power to mass resurrect all party members from the grave and heal it for 3x spAtk
const MassRedemption = new Skill('Mass Redemption', SPL, DEF, AOE, HOLY, {DEAD: false}, SPE, 5, 3, 0, ['hp'])
// a healing generator that dispells all status effects except for Death
const Cure = new Skill('Cure', SPL, DEF, SIN, HOLY, { BURN: false, PSN: false, PAR: false, FZN: false, BZK: false, CONF: false, SLP: false, SLOW: false}, GEN, 1, 0, 0)
// a rage generator that attacks for 1.1x
const HeroicStrike = new Skill('Heroic Strike', COM, OFF, SIN, PHYS, {}, GEN, 20, 1.1, 1)
// a spender that does damage and buffs atk by 1x the level of character
const AimedShot = new Skill('Aimed Shot', COM, OFF, SIN, PHYS, {}, SPE, 40, 1.2, 1, ['atk'])
// a spender that does damage and buffs def by 1x the level of character
const DeterringShot = new Skill('Deterring Shot', COM, OFF, SIN, PHYS, {}, SPE, 40, 1.2, 1, ['def'])
// a generator that does damage
const CobraShot = new Skill('Cobra Shot', COM, OFF, SIN, WIND, {}, GEN, 30, 1.0, 1)
// a spender that does AoE damage and burns all targets
const BlastShot = new Skill('Blast Shot', COM, OFF, AOE, FIRE, {BURN: true, FZN: false}, SPE, 50, 1.1, 1)
// a spender that ignores armor and does 0.8x the damage of atk
const ExposingShot = new Skill('Exposing Shot', COM, OFF, SIN, DARK, {}, SPE, 40, 0.8, 0)
// a spender that freezes every enemy in place
const FreezeTrap =  new Skill('FreezeTrap', COM, OFF, AOE, ICE, {FZN: true}, SPE, 50, 0, 0)
// a move that prevents an attack and returns 0.5x the damage back to the opponent
const Riposte = new Skill('Riposte', COM, DEF, SELF, PHYS, {}, NON, 0, 0.5, 0) // WIP

// const heroicStrike = function(npc, rage = 20) {
//   // a move that does damage 1.2x atk dmg and generates rage
//   let { atk } = this.stats;
//   const { mainHand, offHand, twoHand} = this.inventory;
//   try {
//     if (!mainHand.subtype || !twoHand.subtype) {
//       console.log('You need a melee weapon')
//       return;
//     }
//   } catch (e) { // if it throws an error then we know that there is
//     // either a mainHand or twoHand;
//     this.generateRage(rage);
//     const damage = Math.round(atk * 1.5) - npc.stats.def;
//     npc.stats.hp -= damage;
//     console.log(`${this.name} heroic strikes ${npc.name} for ${damage}!`);
//   }
// }


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
  Fireball,
  Icebolt,
  Thunderbolt,
  Cyclone,
  Earthquake,
  Smite,
  Harden,
  ArcaneIntellect,
  HolyMight,
  FlashHeal,
  GreaterHeal,
  Revive,
  Cure,
  MassRedemption,
  HeroicStrike,
  AimedShot,
  DeterringShot,
  CobraShot,
  BlastShot,
  ExposingShot,
  FreezeTrap,
  Riposte,
}
