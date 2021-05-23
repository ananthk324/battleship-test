const checkForShip = (player, coordinates) => {
  return player.ships.some((ship) =>
    ship.locations.find(
      (shipCoordinates) =>
        shipCoordinates[0] === coordinates[0] &&
        shipCoordinates[1] === coordinates[1]
    )
  );
};

module.exports = { checkForShip };
