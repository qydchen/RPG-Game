const Skill = require('./skillFactory');

class Generator extends Skill {
  constructor(name, type, subtype, targetProp, element, statuses, resource, multiplier) {
    super(name, type, subtype, targetProp, element, statuses, resource, multiplier)
  }
}

module.exports = Generator;
