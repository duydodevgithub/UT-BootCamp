const houses = ["Stark", "Lannister", "Targaryen", "Baratheon"];

const getRandomHouse = function(houses) {
  return houses[Math.floor(Math.random() * houses.length)];
};

const getMove = function() {
  // clone the array, pull an attacker and a defender from it
  const housesLeft = houses.slice(0);
  const defender = getRandomHouse(housesLeft);
  housesLeft.splice(housesLeft.indexOf(defender), 1);
  const attacker = getRandomHouse(housesLeft);

  // return an object representing the the attacker and defender state
  return {
    text: `House ${attacker} has decided to attack!`,
    attacker: attacker,
    defender: defender
  };
};

const getLoser = function(move) {
  if (move.defender === "Targaryen") {
    // Fire and Blood.
    return move.defender;
  }

  if (move.attacker === "Lannister") {
    // H̶e̶a̶r̶̶M̶e̶̶R̶o̶a̶r̶!̶ A Lannister always pays his debts.
    return move.defender;
  }

  if (move.attacker === "Stark") {
    // Attacking is risky. Winter is coming.
    return move.attacker;
  }

  return move.defender;
};

const playGame = function() {
  const move = getMove();
  console.log(`Move: ${move.text}`);

  const loser = getLoser(move);
  houses.splice(houses.indexOf(loser), 1);

  console.log(`
  Loser: ${loser}
  Houses Left: ${houses.join(", ")}
  ---
  `);
};

while (houses.length > 1) {
  playGame();
}

console.log(`Winner: House ${houses[0]}`);
console.log("Runner up: ...When you play the game of thrones, you win or you die.");
