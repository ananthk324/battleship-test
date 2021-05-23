const { expect } = require("chai");

describe("checkForShip", () => {
  const { checkForShip } = require("../game_logic/ship_methods");

  it("should correctly report if no ship at a players coordinate", () => {
    const player = {
      ships: [{ locations: [[0, 0]] }],
    };

    expect(checkForShip(player, [1, 1])).to.be.false;
  });

  it("should correctly report if ship is present at a players coordinate", () => {
    const player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };

    expect(checkForShip(player, [0, 0])).to.be.true;
  });

  it("should handle ships located at more coordinates", () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [1, 2],
            [2, 4],
          ],
        },
      ],
    };

    expect(checkForShip(player, [1, 2])).to.be.true;
    expect(checkForShip(player, [2, 2])).to.be.false;
    expect(checkForShip(player, [2, 4])).to.be.true;
  });

  it("should handle multiple ships", () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [1, 2],
            [2, 4],
          ],
        },
        {
          locations: [
            [1, 1],
            [2, 3],
            [4, 4],
          ],
        },
      ],
    };

    expect(checkForShip(player, [1, 2])).to.be.true;
    expect(checkForShip(player, [2, 2])).to.be.false;

    expect(checkForShip(player, [1, 1])).to.be.true;
    expect(checkForShip(player, [3, 3])).to.be.false;
  });
});
