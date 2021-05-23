const checkForShip = (player, coordinates) => {
  return player.ships.find((ship) =>
    ship.locations.find(
      (shipCoordinates) =>
        shipCoordinates[0] === coordinates[0] &&
        shipCoordinates[1] === coordinates[1]
    )
  );
};

const damageShip = (ship, coordinates) => {
  ship.damage.push(coordinates);
};

const fire = (player, coordinates) => {
  const ship = checkForShip(player, coordinates);

  if (!ship) return;

  damageShip(ship, coordinates);
};

module.exports = { checkForShip, damageShip, fire };
