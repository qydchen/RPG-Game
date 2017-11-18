class Status {
  constructor() {
    this.BURN = false;
    this.PSN = false;
    this.PAR = false;
    this.FZN = false;
    this.BZK = false;
    this.CONF = false;
    this.SLP = false;
    this.DEAD = false;
  }

  view() {
    this.statuses().forEach(cond => {
      if (this[cond]) {
        console.log(`${cond}`)
      }
    })
  }

  die() {
    this.statuses().forEach(cond => {
      if (cond === 'DEAD') {
        this[cond] = true;
      } else {
        this[cond] = false;
      }
    })
  }

  statuses() {
    return Object.getOwnPropertyNames(this);
  }
}

module.exports = Status;