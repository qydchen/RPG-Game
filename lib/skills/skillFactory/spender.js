const Skill = require('./skillFactory');

class Spender extends Skill {
  constructor(name, type, subtype, targetProp, element, statuses, resource, multiplier = 1) {
    super(name, type, subtype, targetProp, element, statuses, resource, multiplier)
  }
}

module.exports = Spender;
