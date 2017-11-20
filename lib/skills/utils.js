const offensiveAction = (move) => {
  return function(...args) {
    move.call(this, ...args);
    if (Number.isInteger(args[0])) {
      const aoeTarget = args.slice(1);
      aoeTarget.forEach(target => {
        this.checkDeath(target);
      });
    } else {
      const singleTarget = args[0];
      this.checkDeath(singleTarget);
    }
  }
}

const defensiveAction = (move) => {
  return function() {
    move.call(this);
  }
}

// const aoeAction = (aoeMove) => {
//   return function(...args) {
//     aoeMove.call(this, ...args);
//     args.forEach(target => {
//       this.checkDeath(target);
//     }
//   }
// }



module.exports = {
  offensiveAction,
  defensiveAction,
}
