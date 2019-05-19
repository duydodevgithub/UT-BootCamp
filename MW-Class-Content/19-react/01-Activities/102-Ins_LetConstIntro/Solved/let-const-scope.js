// var is hoisted to the top of the function, regardless of block
function varTest1 () {
  var x = 1;
  if (true) {
    var x = 2; // 'x' is the same variable as above
    console.log(x); // 2
  }
  console.log(x); // 2
}

function varTest2 () {
  console.log(a); // logs "undefined", but code still runs.
  var a = 2;
}

// let` or `const` are scoped to the "block", not the function:
function letTest1 () {
  let x = 1;
  if (true) {
    let x = 2;  // different variable from above
    console.log(x); // 2
  }
  console.log(x); // 1
}

// won't allow reference before definition
function letTest2 () {
  console.log(b); // ReferenceError: b is not defined. code stops execution
  let b = 3;
}

// When it comes to block scoping, let and const behave the same way
let answer = 42;
let answer = 7 * 6; // Reference error

answer = 7 * 6;