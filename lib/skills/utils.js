const offensiveAction = (ability) => {
  return function(resourceParam) {
    return function(...args) {
      ability.call(this, resourceParam, ...args);
      args.forEach(target => {
        target.checkDeath();
      })
    }
  }
}

const defensiveAction = (move) => {
  return function() {
    move.call(this);
  }
}

module.exports = {
  offensiveAction,
  defensiveAction,
}
