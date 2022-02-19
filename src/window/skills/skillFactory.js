import { COM, SPL, MIX, SHLD, OFF, DEF, AOE, SIN, SELF, FIRE, ICE, WIND, SHOCK, PHYS, HOLY, DARK, GEN, SPE, NON } from './constants';
import Status from '../character/stats/status';

class Skill {
  constructor({
    name,
    type = COM,
    subtype = OFF,
    targetProp = SIN,
    element = PHYS,
    statuses = {},
    skillType = NON,
    resource = 0,
    firMultiple = 0,
    secMultiple = 0,
    thirdMultiple = 0,
    buffs = null,
    req = null
  }) {
    this.name = name;
    this.type = type; // 'COM', 'SPL', 'MIX', 'SHLD'
    this.subtype = subtype; // 'OFF', 'DEF'
    this.targetProp = targetProp; // 'AOE', 'SIN', 'SELF'
    this.element = element; // 'FIRE', 'ICE', 'SHOCK', 'PHYS', 'HOLY', 'DARK'
    this.statuses = statuses; // {BURN: true, FRZ: false}
    this.skillType = skillType; // 'GEN', 'SPE', 'NON'
    this.resource = resource; // integer
    this.firMultiple = firMultiple; // float
    this.secMultiple = secMultiple; // float
    this.thirdMultiple = thirdMultiple; // float
    this.buffs = buffs; // array
    this.req = req; // weapon requirement
    this.owner = null;
    this.use = this.assembleSkill();
  }

  belongsTo(owner) {
    this.owner = owner;
  }

  assembleSkill() {
    return function (...targets) {
      try {
        this.checkWeaponReq();
        this.checkValidTarget(targets);
        // handle rogue combo points
        let comboMultiple;
        if (this.owner.stats.combo) {
          comboMultiple = this.owner.stats.combo;
        } else {
          comboMultiple = 1;
        }
        this.handleGeneratorOrSpender();
        this.printUsage();
        this.handleSkill(comboMultiple, ...targets)
      } catch(e) {
        console.log(e);
      }
    }
  }

  checkValidTarget(targets) {
    if (targets.length !== 1 && this.targetProp === SIN) {
      throw `You must cast ${this.name} on only one target`;
    } else if (targets.length !== 0 && this.targetProp === SELF) {
      throw `${this.name} can be only be used on self`;
    }
  }

  printUsage() {
    if (this.type === SPL) {
      console.log(`${this.owner.name} casts ${this.name}`);
    } else {
      console.log(`${this.owner.name} performs ${this.name}`);
    }
  }

  handleSkill(comboMultiple = 1, ...targets) {
    if (this.targetProp === SELF) {
      targets = [this.owner];
    }
    targets.forEach(target => {
      try {
        if (this.name === 'Revive' || this.name === 'Mass Redemption') {
          this.handleRez(target);
        } else if (target.isDead()) {
          throw `Cannot target a DEAD character`;
        } else if (this.subtype === OFF) {
          const value = this.getValue();
          let damage = (comboMultiple * value) - (target.stats.def * this.secMultiple);
          damage = damage < 0 ? 1 : damage; // chip damage
          target.stats.hp -= damage;
          console.log(`${this.owner.name} deals ${damage} ${this.element} damage to ${target.name}!`)
          if (this.buffs) {
            this.handleBuffs(this.owner);
          }
          target.status = this.handleStatusEffect(target, true);
          target.checkDeath();
        } else if (this.subtype === DEF) {
          target.status = this.handleStatusEffect(target);
          this.handleBuffs(target);
        }
      } catch (e) {
        console.log(e);
      }
    })
  }

  handleStatusEffect(target, inflict = false) {
    let statuses = Object.keys(this.statuses);
    if (inflict) {
      statuses = statuses.filter((status) => !target.status[status]);
    } else {
      statuses = statuses.filter((status) => target.status[status]);
    }
    statuses.forEach(status => {
      if (this.statuses[status]) {
        console.log(`${target.name} is ${status}`)
      } else {
        console.log(`${target.name} is no longer ${status}`)
      }
    })
    return Object.assign(new Status, target.status, this.statuses);
  }

  handleRez(target) {
    try {
      if (target.isDead()) {
        target.status = this.handleStatusEffect(target);
        this.handleBuffs(target);
      } else {
        throw "You can't cast this right now";
      }
    } catch (e) {
      if (this.name === 'Mass Redemption') {
        return;
      }
      console.log(e);
    }
  }

  handleBuffs(target) {
    const healValue = this.getValue();
    const buffValue = this.getValue(this.thirdMultiple, true);

    if (this.buffs) {
      this.buffs.forEach(buff => {
        switch (buff) {
          case 'hp':
          target.stats.healHP(healValue);
          console.log(`${this.name} heals ${target.name} for ${healValue}!`);
          break;
        default:
          target.stats[buff] += buffValue;
          console.log(`${this.name} buffs ${target.name}'s ${buff} for ${buffValue}!`);
          break;
        }
      });
    }
  }

  getValue(multiple = this.firMultiple, isBuff = false) {
    let modifier;
    if (isBuff) {
      modifier = this.owner.stats.level;
    } else if (this.type === COM) {
      modifier = this.owner.stats.atk;
    } else if (this.type === SPL) {
      modifier = this.owner.stats.spAtk;
    } else if (this.type === MIX) {
      modifier = this.owner.stats.spAtk + this.owner.stats.atk;
    } else if (this.type === SHLD) {
      modifier = this.owner.stats.atk + this.owner.stats.def;
    }
    return Math.round(modifier * multiple);
  }

  handleGeneratorOrSpender() {
    if (this.skillType === GEN) {
      this.owner.generatePower(this.resource);
    } else if (this.skillType === SPE) {
      this.owner.spendPower(this.resource);
    }
  }

  checkWeaponReq() {
    for (let type in this.req) {
      let value = this.req[type];
      if (value === !!this.owner.inventory[type]) {
        // value can be a strict true to equate it to the weapon
        return;
      }

      if (!this.owner.inventory[type]) {
        throw `${this.name} requires a ${type} weapon`;
      } else if (value.subtype !== this.owner.inventory[type].subtype) {
        throw `${this.name} requires a ${value.subtype} on your ${type}`
      }

    }
  }

}

export default Skill;
