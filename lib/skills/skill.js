class Skill {
  constructor(name, type, subtype, targetProp, element, statuses, resource, multiplier = 1) {
    this.name = name;
    this.type = type; // 'COM', 'SPL'
    this.subtype = subtype; // 'OFF', 'DEF'
    this.targetProp = targetProp; // 'AOE', 'SIN'
    this.element = element; // 'FIRE', 'ICE', 'SHOCK', 'PHYS', 'HOLY', 'DARK'
    this.statuses = statuses; // {BURN: true, FRZ: false}
    this.resource = resource; // integer
    this.multiplier = multiplier;
  }

  use() {
    // const modifier = this.type === 'COM' ? owner.stats.atk : owner.stats.spAtk;
  }

}

module.exports = Skill;
