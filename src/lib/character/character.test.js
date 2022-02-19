const Character = require("./character");

describe("the Character class", () => {
  let Guy;
  let statGain = { atk: 2, def: 2, spAtk: 3, maxHP: 6 };
  beforeEach(() => {
    Guy = new Character("Guy");
  });

  test("starts at level one", () => {
    expect(Guy.stats.level).toBe(1);
  });
});
