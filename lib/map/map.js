class Map {
  constructor(tiles = 100, encounterChance = 0.2, areaDifficulty = [1, 2]) {
    this.map = this.construct(tiles);
    this.playerPos = this.generateStartingPos(tiles);
    this.encounterChance = encounterChance;
    this.areaDifficulty = areaDifficulty;
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

  generateStartingPos(tiles) {
    let y = Math.floor(Math.random() * tiles);
    let x = Math.floor(Math.random() * tiles);
    this.setMark([y, x], '*')
    return [y, x];
  }

  setMark(pos, entity) {
    let y = pos[0];
    let x = pos[1];
    this.map[y][x] = entity;
  }

  encounter() {
  }

}

module.exports = Map;
