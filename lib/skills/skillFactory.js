const _ = require('./constants');
const Status = require('../character/stats/status');
const { COM, SPL, OFF, DEF, AOE, SIN, SELF, FIRE, ICE, WIND, SHOCK, PHYS, HOLY, DARK, GEN, SPE, NON } = _;

class Skill {
  constructor(name, type, subtype, targetProp, element, statuses = {}, skillType, resource, multiplier = 1, defMultiplier = 1) {
    this.name = name;
    this.type = type; // 'COM', 'SPL'
    this.subtype = subtype; // 'OFF', 'DEF'
    this.targetProp = targetProp; // 'AOE', 'SIN', 'SELF'
    this.element = element; // 'FIRE', 'ICE', 'SHOCK', 'PHYS', 'HOLY', 'DARK'
    this.statuses = statuses; // {BURN: true, FRZ: false}
    this.skillType = skillType; // 'GEN', 'SPE', 'NON'
    this.resource = resource; // integer
    this.multiplier = multiplier;
    this.defMultiplier = defMultiplier;
    this.owner = null;
    this.use = this.assembleSkill();
  }

  belongsTo(owner) {
    this.owner = owner;
  }

  assembleSkill() {
    return function (...targets) {
      try {
        if (targets.length !== 1 && this.targetProp === SIN) {
          throw "You must target a single character";
        } else if (targets.length !== 0 && this.targetProp === SELF) {
          throw "This can be only be used on self";
        }
        this.handleGeneratorOrSpender();
        if (this.subtype === OFF) {
          this.handleOffensiveSkill(...targets);
        } else {
          this.handleDefensiveSkill(...targets);
        }
      } catch(e) {
        console.log(e);
      }
    }
  }

  handleOffensiveSkill(...targets) {
    const value = this.getValue();
    console.log(`${this.owner.name} casts ${this.name}`)
    targets.forEach(target => {
      const damage = value - (target.stats.def * this.defMultiplier);
      target.stats.hp -= damage;
      console.log(`${this.owner.name} deals ${damage} ${this.element} damage to ${target.name}!`)
      target.status = this.handleStatusEffect(target);
      target.checkDeath();
    })
  }

  handleDefensiveSkill(...targets) {

  }

  handleStatusEffect(target) {
    return Object.assign(new Status, target.status, this.statuses);
  }

  getValue() {
    let modifier;
    if (this.type === COM && this.subtype === OFF) {
      modifier = this.owner.stats.atk;
    } else if (this.type === COM && this.subtype === DEF) {
      modifier = this.owner.stats.def;
    } else if (this.type === SPL) {
      modifier = this.owner.stats.spAtk;
    }
    return Math.round(modifier * this.multiplier);
  }

  handleGeneratorOrSpender() {
    if (this.skillType === GEN) {
      this.owner.generatePower(this.resource);
    } else if (this.skillType = SPE) {
      this.owner.spendPower(this.resource);
    }
  }

}

module.exports = Skill;
