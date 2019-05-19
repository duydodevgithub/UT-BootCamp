{
  let a = "Kathryn";

  console.log(a); // Kathryn
}
// console.log(time); // DOES NOT WORK BECAUSE LET VARIABLES ARE NOT HOISTED
console.log(a); // REFERENCE ERROR
// use `const` to declare variables which won't change
const ANSWER = 42;

// can't do this - SyntaxError: "PI" is read-only, so can't reassign
// ANSWER = 3.14159;

// can, however, MODIFY arrays and objects
const PETS = ["Dog", "Cat", "Endangered Sea Turtles"];

console.log("before : ", PETS);
PETS.pop(); // FREE THE TURTLES!!!
console.log("after : ", PETS);

// still can't reassign: this would throw SyntaxError: "PETS" is read-only
// PETS = ["Sawyer", "Daigo"]

// use `let` to declare variables which will change
let time = 10;

// this is fine
time = 12;
console.log(time);
