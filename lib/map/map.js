class Map {
  constructor(tiles = 100) {
    this.map = this.construct(tiles);
    this.playerPos = this.generateStartingPos();
  }

  viewMap() {
    console.log(this.map);
  }

  construct(tiles) {
    let grid = [];
    for (let i = 0; i < tiles; i++) {
      let row = [];
      for (let i = 0; i < tiles; i++) {
        row.push(1);
      }
      grid.push(row);
    }
    return grid;
  }

  generateStartingPos() {
    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);
    this.setMark([y, x], '*')
    return [y, x];
  }

  setMark(pos, entity) {
    let y = pos[0];
    let x = pos[1];
    this.map[y][x] = entity;
  }

}

module.exports = Map;
