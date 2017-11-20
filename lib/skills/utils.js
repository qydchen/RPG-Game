const offensiveAction = (move) => {
  return function(...args) {
    move.call(this, ...args);
    this.checkDeath(args[0]);
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
