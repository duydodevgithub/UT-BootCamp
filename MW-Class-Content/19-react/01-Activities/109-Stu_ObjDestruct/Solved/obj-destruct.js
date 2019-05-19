const borrub = {
  race: "Orc",
  gender: "male",
  name: "Borrub",
  className: "Hunter",
  level: 14
};

let avatars = [
  {
    race: "Undead",
    gender: "female",
    name: "Tameli",
    className: "Rogue",
    level: 33
  },
  {
    race: "Human",
    gender: "female",
    name: "Fiana",
    className: "Mage",
    level: 10
  }
];

// Update this function so it uses object rest to append the new avatar to the array
const addAvatar = avatar => [...avatars, avatar];

const greet = (avatar) => {
  // Destructuring the following properties off of the avatar object
  const { name, level, gender, race, className } = avatar;
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// We can also destructure function parameters
const greet2 = ({ name, level, gender, race, className }) => {
  console.log(`I am ${name}, level ${level} ${gender} ${race} ${className}.`);
};

// Adds borrub to the list of avatars
avatars = addAvatar(borrub);

// For each avatar, call the greet function and pass in the avatar as an argument
avatars.forEach(greet);
