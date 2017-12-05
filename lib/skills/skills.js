const Skill = require('./skillFactory');
const _ = require('./constants');

const bowReq = {twoHand: {subtype: 'bow'}};

const { COM, SPL, MIX, OFF, DEF, AOE, SIN, SELF, FIRE, ICE, WIND, SHOCK, PHYS, HOLY, DARK, GEN, SPE, NON } = _;
// Skill(name, type, subtype, targetProp, element, statuses = {}, skillType, resource, multiplier = 1, secMultiplier = 1, thirdMultiplier = 1, buffs = null, req = null)
// a generator that burns and damages opponent for 1.1x damage
const Fireball = new Skill('Fireball', SPL, OFF, SIN, FIRE, {BURN: true, FZN: false}, GEN, 10, 1.1, 1, 0);
// a self buff that adds 2x level modifier to the caster's spAtk
const ArcaneIntellect = new Skill('Arcane Intellect', SPL, DEF, SELF, PHYS, {}, NON, 0, 0, 0, 2, ['spAtk'])
// a generator that ignores armor, slows opponent, and removes burn
const Icebolt = new Skill('Icebolt', SPL, OFF, SIN, ICE, {BURN: false, SLOW: true}, GEN, 8, 0.4, 0, 0);
// a spender that damages opponent for 1.2x and paralyzes
const Thunderbolt = new Skill('Thunderbolt', SPL, OFF, SIN, SHOCK, {PAR: true}, SPE, 20, 1.2, 1, 0);
// a mage self buff that adds 3x level modifier to the performer's def
const IceArmor = new Skill('Ice Armor', SPL, DEF, SELF, ICE, {}, NON, 0, 0, 0, 2, ['def']);
// an AoE spender that deals little damage but freezes enemies in place
const FrostNova =  new Skill('Frost Nova', SPL, OFF, AOE, ICE, { FZN: true }, SPE, 20, 0.5, 1, 0)
// an AoE buff that increases the spd of party members
const MassHaste = new Skill('Mass Haste', SPL, DEF, AOE, WIND, {}, NON, 0, 0, 0, 1, ['spd'])
// an AoE spender that damages opponents for 1.1x damage
const Cyclone = new Skill('Cyclone', SPL, OFF, AOE, WIND, {}, SPE, 28, 1.1, 1, 0);
// an AoE spender that damages opponents for 1.3x damage
const Earthquake = new Skill('Earthquake', SPL, OFF, AOE, PHYS, {}, SPE, 36, 1.3, 1, 0);
// a self buff that adds 2x level modifier to the caster's atk
const HolyMight = new Skill('Holy Might', SPL, DEF, SELF, HOLY, {}, NON, 0, 0, 0, 2, ['atk']);
// a generator that damages opponents for 1.2x damage. modifier is based on the user's atk and spAtk combined
const Smite = new Skill('Smite', MIX, OFF, SIN, HOLY, {}, GEN, 1, 1.2, 1, 0);
// a spender that damages opponents for 1.2x damage and ignores armor. modifier is based on the user's spAtk
const HolyFire = new Skill('Holy Fire', SPL, OFF, SIN, FIRE, { BURN: true, FZN: false }, SPE, 1, 1.2, 0, 0);
// a spender that sets the opponent asleep
const Repentance = new Skill('Repentance', SPL, OFF, SIN, HOLY, { SLP: true }, SPE, 1, 0, 0, 0);
// a healing generator that heals a target for 2x the caster's spAtk
const FlashHeal = new Skill('Flash Heal', SPL, DEF, SIN, HOLY, {}, GEN, 1, 1.5, 0, 0, ['hp']);
// a healing spender that greatly heals a target for 2.2x the caster's spAtk
const GreaterHeal = new Skill('Greater Heal', SPL, DEF, SIN, HOLY, {}, SPE, 1, 2.2, 0, 0, ['hp']);
// a spender that spends 2 holy power to ressurect a character from the grave and heal it for 2x spAtk
const Revive = new Skill('Revive', SPL, DEF, SIN, HOLY, { DEAD: false }, SPE, 2, 2, 0, 0, ['hp']);
// a spender that spends 5 holy power to mass resurrect all party members from the grave and heal it for 3x spAtk
const MassRedemption = new Skill('Mass Redemption', SPL, DEF, AOE, HOLY, { DEAD: false }, SPE, 5, 3, 0, 0, ['hp']);
// a healing generator that dispells all status effects except for Death
const Cure = new Skill('Cure', SPL, DEF, SIN, HOLY, { BURN: false, PSN: false, PAR: false, FZN: false, BZK: false, CONF: false, SLP: false, SLOW: false}, GEN, 1, 0, 0, 0);
// a spender that does damage and buffs atk by 1x the level of character
const AimedShot = new Skill('Aimed Shot', COM, OFF, SIN, PHYS, {}, SPE, 40, 1.2, 1, 1, ['atk'], bowReq);
// a spender that does damage and buffs def by 1x the level of character
const DeterringShot = new Skill('Deterring Shot', COM, OFF, SIN, PHYS, {}, SPE, 40, 1.2, 1, 1, ['def'], bowReq);
// a generator that does 1.1x multiplier damage
const ForceArrow = new Skill('Force Arrow', COM, OFF, SIN, WIND, {}, GEN, 30, 1.1, 1, 0, null, bowReq);
// a spender that does AoE damage and burns all targets
const BlastShot = new Skill('Blast Shot', COM, OFF, AOE, FIRE, { BURN: true, FZN: false }, SPE, 50, 1.1, 1, 0, null, bowReq)
// a spender that ignores armor and does 0.8x the damage of atk
const ExposingShot = new Skill('Exposing Shot', COM, OFF, SIN, DARK, {}, SPE, 40, 0.8, 0, 0, null, bowReq);
// a generator that does damage and generates alot of focus
const SteadyShot = new Skill('Steady Shot', COM, OFF, SIN, PHYS, {}, GEN, 35, 1, 1, 0, null, bowReq);
// a spender that paralyzes the opponent
const CobraSting = new Skill('Cobra Sting', COM, OFF, SIN, DARK, { PAR: true }, SPE, 35, 1, 1, 0, null, bowReq);
// a spender that freezes every enemy in place
const FreezeTrap =  new Skill('Freeze Trap', COM, OFF, AOE, ICE, { FZN: true }, SPE, 50, 0, 0, 0);
// a massive self buff that adds 3x level multiplier to atk
const Marksmanship = new Skill('Marksmanship', COM, DEF, SELF, WIND, {}, NON, 0, 0, 0, 3, ['atk'], bowReq);
// * note that all finishing moves have no resource cost as by default it will expend ALL combopoints;
// a combo mainhand move that does 1.1x atk damage. grants 1 combo point
const Pursuit = new Skill('Pursuit', COM, OFF, SIN, DARK, {}, GEN, 1, 1.1, 1, 0, null, {mainHand: true});
// a finishing move that expends all combo points to deal combo times 0.8x the damage
const Eviscerate = new Skill('Eviscerate', COM, OFF, SIN, DARK, {}, SPE, 0, 0.8, 1, 0, null, {mainHand: true});
// drink a tonic that removes most status effects
const Tonic = new Skill('Tonic', COM, DEF, SELF, PHYS, { PSN: false, PAR: false, BZK: false, CONF: false, SLOW: false}, NON, 0)
// a move that paralyzes the opponent and does 0.5x dmg
const Blackjack = new Skill('Blackjack', COM, OFF, SIN, PHYS, { PAR: true }, NON, 0, 0.5, 1, 0, null, {mainHand: true});
// a combo move that ignores half the armor of the opponent
const Backstab = new Skill('Backstab', COM, OFF, SIN, PHYS, {}, GEN, 1, 1, 0.5, 0, null, {mainHand: {subtype: 'dagger'}, offHand: {subtype: 'dagger'}});
// a combo generator that poisons the opponent and does 1x dmg
const Envenom = new Skill('Envenom', COM, OFF, SIN, DARK, { PSN: true }, GEN, 1, 1, 1, 0, null, {mainHand: true});
// a finishing move that expends all combo points to buff atk and spd by 1.5x times the current level of the user
const BladeFlurry = new Skill('Blade Flurry', COM, DEF, SELF, WIND, {}, SPE, 0, 0, 0, 1.5, ['spd', 'atk']);
// premeditate and generate 2 combo point
const Premeditate = new Skill('Premeditate', COM, DEF, SELF, DARK, {}, GEN, 2);
// a finishing move that attacks the opponent for 0.5x and buffs the defense of the user by 1x the level
const Riposte = new Skill('Riposte', COM, OFF, SIN, PHYS, {}, SPE, 0, 0.5, 1, 1, ['def'], {mainHand: true});
// a rage generator that attacks for 1.1x
const HeroicStrike = new Skill('Heroic Strike', COM, OFF, SIN, PHYS, {}, GEN, 15, 1.1, 1, 0);
// a generator that increases defense by 1.5x hero level
const ShieldBlock = new Skill('Shield Block', COM, DEF, SELF, PHYS, {}, GEN, 15, 0, 0, 1.5, ['def'], {offHand: {shield: true}});
// a spender that deals a massive strike to the enemy for 1.8x damage
const MortalStrike = new Skill('Mortal Strike', COM, OFF, SIN, PHYS, {}, SPE, 30, 1.8, 1, 0, {mainHand: true});
// a spender that slows the opponent and deals 0.5x damage
const Hamstring = new Skill('Hamstring', COM, OFF, SIN, PHYS, {SLOW: true}, SPE, 7, 0.5, 1, 0, {mainHand: true});

module.exports = {
  Fireball,
  ArcaneIntellect,
  Icebolt,
  Thunderbolt,
  IceArmor,
  Cyclone,
  FrostNova,
  MassHaste,
  Earthquake,
  Smite,
  FlashHeal,
  HolyMight,
  HolyFire,
  GreaterHeal,
  Cure,
  Revive,
  Repentance,
  MassRedemption,
  SteadyShot,
  AimedShot,
  DeterringShot,
  ForceArrow,
  BlastShot,
  ExposingShot,
  CobraSting,
  Marksmanship,
  FreezeTrap,
  Tonic,
  Eviscerate,
  Pursuit,
  Backstab,
  Blackjack,
  Envenom,
  Premeditate,
  BladeFlurry,
  Riposte,
  HeroicStrike,
  ShieldBlock,
  MortalStrike,
  Hamstring,
}
