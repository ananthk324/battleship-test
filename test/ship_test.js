const { expect } = require("chai");

describe("checkForShip", () => {
  const { checkForShip } = require("../game_logic/ship_methods");

  it("should correctly report if no ship at a players coordinate", () => {
    const player = {
      ships: [{ locations: [[0, 0]] }],
    };

    expect(checkForShip(player, [1, 1])).to.be.undefined;
  });

  it("should correctly report if ship is present at a players coordinate", () => {
    const player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };

    expect(checkForShip(player, [0, 0])).to.be.deep.equal(player.ships[0]);
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

    expect(checkForShip(player, [1, 2])).to.be.deep.equal(player.ships[0]);
    expect(checkForShip(player, [2, 2])).to.be.undefined;
    expect(checkForShip(player, [2, 4])).to.be.deep.equal(player.ships[0]);
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

    expect(checkForShip(player, [1, 2])).to.be.deep.equal(player.ships[0]);
    expect(checkForShip(player, [2, 2])).to.be.undefined;

    expect(checkForShip(player, [1, 1])).to.be.deep.equal(player.ships[1]);
    expect(checkForShip(player, [3, 3])).to.be.undefined;
  });
});

describe("damageShip", () => {
  const { damageShip } = require("../game_logic/ship_methods");

  it("should mark damage on a given location", () => {
    const ship = {
      locations: [
        [0, 1],
        [1, 1],
      ],
      damage: [],
    };

    damageShip(ship, [0, 0]);

    expect(ship.damage).to.be.not.empty;
    expect(ship.damage[0]).to.deep.equal([0, 0]);
  });
});

describe("fire", () => {
  const { fire } = require("../game_logic/ship_methods");

  it("should mark damage at a ship on a coordinate", () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [1, 2],
            [2, 4],
          ],
          damage: [],
        },
        {
          locations: [
            [1, 1],
            [2, 3],
            [4, 4],
          ],
          damage: [],
        },
      ],
    };

    fire(player, [0, 0]);

    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  });

  it("should not mark damage when ship doesnt exist", () => {
    const player = {
      ships: [
        {
          locations: [
            [0, 0],
            [1, 2],
            [2, 4],
          ],
          damage: [],
        },
        {
          locations: [
            [1, 1],
            [2, 3],
            [4, 4],
          ],
          damage: [],
        },
      ],
    };

    fire(player, [7, 7]);

    expect(player.ships[0].damage).to.be.empty;
  });
});
