import Skill from './skillFactory';
import { COM, SPL, MIX, SHLD, OFF, DEF, AOE, SIN, SELF, FIRE, ICE, WIND, SHOCK, PHYS, HOLY, DARK, GEN, SPE, NON } from './constants';
const bowReq = {twoHand: {subtype: 'bow'}};
const cureStats = { BURN: false, PSN: false, PAR: false, FZN: false, BZK: false, CONF: false, SLP: false, SLOW: false };

// Skill(name, type, subtype, targetProp, element, statuses = {}, skillType = NON, resource = 0, firMultiple = 0, secMultiple = 0, thirdMultiple = 0, buffs = null, req = null)
// a generator that burns and damages opponent for 1.1x damage
// params {name: , type: , subtype: , targetProp: , element: , statuses: {} , skillType: NON , resource: , firMultiple = 1, secMultiple = 1, thirdMultiple = 1, buffs = null, req = null}
const Fireball = new Skill({name: 'Fireball', type: SPL, subtype: OFF, targetProp: SIN, element: FIRE, statuses: {BURN: true, FZN: false}, skillType: GEN, resource: 10, firMultiple: 1.1, secMultiple: 1});
// a self buff that adds 2x level modifier to the caster's spAtk
const ArcaneIntellect = new Skill({name: 'Arcane Intellect', type: SPL, subtype: DEF, targetProp: SELF, element: PHYS, thirdMultiple: 2, buffs: ['spAtk']});
// a generator that ignores armor, slows opponent, and removes burn
const Icebolt = new Skill({name: 'Icebolt', type: SPL, subtype: OFF, targetProp: SIN, element: ICE, statuses: { BURN: false, SLOW: true}, skillType: GEN, resource: 8, firMultiple: 0.4 });
// a spender that damages opponent for 1.2x and paralyzes
const Thunderbolt = new Skill({name: 'Thunderbolt', type: SPL, subtype: OFF, targetProp: SIN, element: SHOCK, statuses: { PAR: true}, skillType: SPE, resource: 20, firMultiple: 1.2, secMultiple: 1});
// a mage self buff that adds 3x level modifier to the performer's def
const IceArmor = new Skill({name: 'Ice Armor', type: SPL, subtype: DEF, targetProp: SELF, element: ICE, thirdMultiple: 2, buffs: ['def']});
// an AoE spender that deals little damage but freezes enemies in place
const FrostNova =  new Skill({name: 'Frost Nova', type: SPL, subtype: OFF, targetProp: AOE, element: ICE, statuses: { FZN: true }, skillType: SPE, resource: 20, firMultiple: 0.5, secMultiple: 1});
// an AoE buff that increases the spd of party members
const MassHaste = new Skill({name: 'Mass Haste', type: SPL, subtype: DEF, targetProp: AOE, element: WIND, thirdMultiple: 1, buffs: ['spd']});
// an AoE spender that damages opponents for 1.1x damage
const Cyclone = new Skill({name: 'Cyclone', type: SPL, subtype: OFF, targetProp: AOE, element: WIND, skillType: SPE, resource: 28, firMultiple: 1.1, secMultiple: 1});
// an AoE spender that damages opponents for 1.3x damage
const Earthquake = new Skill({name: 'Earthquake', type: SPL, subtype: OFF, targetProp: AOE, element: PHYS, skillType: SPE, resource: 36, firMultiple: 1.3, secMultiple: 1});
// a self buff that adds 2x level modifier to the caster's atk
const HolyMight = new Skill({name: 'Holy Might', type: SPL, subtype: DEF, targetProp: SELF,element: HOLY, thirdMultiple: 2, buffs: ['atk']});
// a generator that damages opponents for 1.2x damage. modifier is based on the user's atk and spAtk combined
const Smite = new Skill({name: 'Smite', type: MIX, subtype: OFF, targetProps: SIN, element: HOLY, skillType: GEN, resource: 1, firMultiple: 1.2, secMultiple: 1});
// a spender that damages opponents for 1.2x damage and ignores armor. modifier is based on the user's spAtk
const HolyFire = new Skill({name: 'Holy Fire', type: SPL, subtype: OFF, targetProp: SIN, element: FIRE, statuses: { BURN: true, FZN: false }, skillType: SPE, resource: 1, firMultiple: 1.2});
// a spender that sets the opponent asleep
const Repentance = new Skill({name: 'Repentance', type: SPL, subtype: OFF, targetProp: SIN, element: HOLY, statuses: { SLP: true }, skillType: SPE, resource: 1});
// a healing generator that heals a target for 1.5x the caster's spAtk
const FlashHeal = new Skill({name: 'Flash Heal', type: SPL, subtype: DEF, targetProp: SIN, element: HOLY, skillType: GEN, resource: 1, firMultiple: 1.5, buffs: ['hp']});
// a healing spender that greatly heals a target for 2.2x the caster's spAtk
const GreaterHeal = new Skill({name: 'Greater Heal', type: SPL, subtype: DEF, targetProp: SIN, element: HOLY, skillType: SPE, resource: 1, firMultiple: 2.2, buffs: ['hp']});
// a spender that spends 2 holy power to ressurect a character from the grave and heal it for 2x spAtk
const Revive = new Skill({name: 'Revive', type: SPL, subtype: DEF, targetProp: SIN, element: HOLY, statuses: { DEAD: false }, skillType: SPE, resource: 2, firMultiple: 2, buffs: ['hp']});
// a spender that spends 5 holy power to mass resurrect all party members from the grave and heal it for 3x spAtk
const MassRedemption = new Skill({name: 'Mass Redemption', type: SPL, subtype: DEF, targetProp: AOE, element: HOLY, statuses: { DEAD: false }, skillType: SPE, resource: 5, firMultiple: 3, buffs: ['hp']});
// a healing generator that dispells all status effects except for Death
const Cure = new Skill({name: 'Cure', type: SPL, subtype: DEF, targetProp: SIN, element: HOLY, statuses: cureStats, skillType: GEN, resource: 1});
// a spender that does damage and buffs atk by 1x the level of character
const AimedShot = new Skill({name: 'Aimed Shot', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: SPE, resource: 40, firMultiple: 1.2, secMultiple: 1, thirdMultiple: 1, buffs: ['atk'], req: bowReq});
// a spender that does damage and buffs def by 1x the level of character
const DeterringShot = new Skill({name: 'Deterring Shot', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: SPE, resource: 40, firMultiple: 1.2, secMultiple: 1, thirdMultiple: 1, buffs: ['def'], req: bowReq});
// a generator that does 1.1x multiplier damage
const ForceArrow = new Skill({name: 'Force Arrow', type: COM, subtype: OFF, targetProp: SIN, element: WIND, skillType: GEN, resource: 30, firMultiple: 1.1, secMultiple: 1, req: bowReq});
// a spender that does AoE damage and burns all targets
const BlastShot = new Skill({name: 'Blast Shot', type: COM, subtype: OFF, targetProp: AOE, element: FIRE, statuses: { BURN: true, FZN: false }, skillType: SPE, resource: 50, firMultiple: 1.1, secMultiple: 1, req: bowReq})
// a spender that ignores armor and does 0.8x the damage of atk
const ExposingShot = new Skill({name: 'Exposing Shot', type: COM, subtype: OFF, targetProp: SIN, element: DARK, skillType: SPE, resource: 40, firMultiple: 0.8, req: bowReq});
// a generator that does damage and generates alot of focus
const SteadyShot = new Skill({name: 'Steady Shot', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: GEN, resource: 35, firMultiple: 1, secMultiple: 1, req: bowReq});
// a spender that paralyzes the opponent
const CobraSting = new Skill({name: 'Cobra Sting', type: COM, subtype: OFF, targetProp: SIN, element: DARK, statuses: { PAR: true }, skillType: SPE, resource: 35, firMultiple: 1, secMultiple: 1, req: bowReq});
// a spender that freezes every enemy in place
const FreezeTrap =  new Skill({name: 'Freeze Trap', type: COM, subtype: OFF, targetProp: AOE, element: ICE, statuses: { FZN: true }, skillType: SPE, resource: 50});
// a massive self buff that adds 3x level multiplier to atk
const Marksmanship = new Skill({name: 'Marksmanship', type: COM, subtype: DEF, targetProp: SELF, element: WIND, thirdMultiple: 3, buffs: ['atk'], req: bowReq});
// * note that all finishing moves have no resource cost as by default it will expend ALL combopoints;
// a combo mainhand move that does 1.1x atk damage. grants 1 combo point
const Pursuit = new Skill({name: 'Pursuit', type: COM, subtype: OFF, targetProp: SIN, element: DARK, skillType: GEN, resource: 1, firMultiple: 1.1, secMultiple: 1, req: {mainHand: true}});
// a finishing move that expends all combo points to deal combo times 0.8x the damage
const Eviscerate = new Skill({name: 'Eviscerate', type: COM, subtype: OFF, targetProp: SIN, element: DARK, skillType: SPE, firMultiple: 0.8, secMultiple: 1, req: {mainHand: true}});
// drink a tonic that removes most status effects
const Tonic = new Skill({name: 'Tonic', type: COM, subtype: DEF, targetProp: SELF, element: PHYS, statuses: { PSN: false, PAR: false, BZK: false, CONF: false, SLOW: false}});
// a move that paralyzes the opponent and does 0.5x dmg
const Blackjack = new Skill({name: 'Blackjack', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, statuses: { PAR: true }, firMultiple: 0.5, secMultiple: 1, req: {mainHand: true}});
// a combo move that ignores half the armor of the opponent
const Backstab = new Skill({name: 'Backstab', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: GEN, resource: 1, firMultiple: 1, secMultiple: 0.5, req: {mainHand: {subtype: 'dagger'}, offHand: {subtype: 'dagger'}}});
// a combo generator that poisons the opponent and does 1x dmg
const Envenom = new Skill({name: 'Envenom', type: COM, subtype: OFF, targetProp: SIN, element: DARK, statuses: { PSN: true }, skillType: GEN, resource: 1, firMultiple: 1, secMultiple: 1, req: {mainHand: true}});
// a finishing move that expends all combo points to buff atk and spd by 1.5x times the current level of the user
const BladeFlurry = new Skill({name: 'Blade Flurry', type: COM, subtype: DEF, targetProp: SELF, element: WIND, skillType: SPE, thirdMultiple: 1.5, buffs: ['spd', 'atk']});
// premeditate and generate 2 combo point
const Premeditate = new Skill({name: 'Premeditate', type: COM, subtype: DEF, targetProp: SELF, element: DARK, skillType: GEN, resource: 2});
// a finishing move that attacks the opponent for 0.5x and buffs the defense of the user by 1x the level
const Riposte = new Skill({name: 'Riposte', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: SPE, firMultiple: 0.5, secMultiple: 1, thirdMultiple: 1, buffs: ['def'], req: {mainHand: true}});
// a rage generator that attacks for 1.1x
const HeroicStrike = new Skill({name: 'Heroic Strike', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: GEN, resource: 15, firMultiple: 1.1, secMultiple: 1, req: {mainHand: true}});
// a generator that increases defense by 1.5x hero level
const ShieldBlock = new Skill({name: 'Shield Block', type: COM, subtype: DEF, targetProp: SELF, element: PHYS, skillType: GEN, resource: 15, thirdMultiple: 1.5, buffs: ['def'], req: {offHand: {subtype: 'shield'}}});
// a spender that deals a massive strike to the enemy for 2x damage
const MortalStrike = new Skill({name: 'Mortal Strike', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, skillType: SPE, resource: 30, firMultiple: 2, secMultiple: 1, req: {mainHand: true}});
// a spender that slows the opponent and deals 0.5x damage
const Hamstring = new Skill({name: 'Hamstring', type: COM, subtype: OFF, targetProp: SIN, element: PHYS, statuses: {SLOW: true}, skillType: SPE, resource: 7, firMultiple: 0.5, secMultiple:1, req: {mainHand: true}});
// a spender that deals 1x damage across all enemies
const Cleave = new Skill({name: 'Cleave', type: COM, subtype: OFF, targetProp: AOE, element: PHYS, skillType: SPE, resource: 15, firMultiple: 1, secMultiple: 1, req: {mainHand: true}});
// a spender that increases the atk, def, spAtk, and maxHP of the party by 1x the warrior's level
const CommandingCry = new Skill({name: 'Commanding Cry', type: COM, subtype: DEF, targetProp: AOE, element: PHYS, skillType: SPE, resource: 30, thirdMultiple: 1, buffs: ['atk', 'def', 'spAtk', 'maxHP']});
// generates 45 rage
const Fury = new Skill({name: 'Fury', type: COM, subtype: OFF, targetProp: SELF, element: PHYS, skillType: GEN, resource: 45});
// a spender that deals 1.1x damage plus the owners atk and def combined. paralyzes opponent
const ShieldBash = new Skill({name: 'Shield Bash', type: SHLD, subtype: OFF, targetProp: SIN, element: PHYS, statuses: { PAR: true }, skillType: SPE, resource: 30, firMultiple: 1.1, secMultiple: 1, req: {offHand: {subtype: 'shield'}}});
// a spender that deals BZK the user and increases attack by 5x
const Berserk = new Skill({name: 'Berserk', type: COM, subtype: DEF, targetProp: SELF, element: FIRE, statuses: { BZK: true }, skillType: SPE, resource: 50, thirdMultiple: 5, buffs: ['atk']});

const Skills = {
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
  Cleave,
  CommandingCry,
  Fury,
  ShieldBash,
  Berserk,
}

export default Skills;
