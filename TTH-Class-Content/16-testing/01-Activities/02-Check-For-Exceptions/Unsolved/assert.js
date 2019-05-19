"use strict";

// 1. Use assertThrows to call multiply.

// 2. Update assertThrows so that it can call multiply with two arguments
//    (replace /* some_arguments_here */ with the correct args...assertThrows should take 3 args)

// 3. Use a try/catch clause to try to call multiply, and set the var threw to true if multiply threw an error

// 4. Next, update multiply so that it throws an error if either x or y is not a number, and returns the result otherwise.

// 5. Finally, update assertThrows such that it prints 'Function threw.' to the console, and returns true if an error was thrown,
//    and prints 'Function did not throw' and returns false if an error was not thrown (notice the var 'threw' was defauled to false)


// step 2
var assertThrows = function( /* some_arguments_here */ ) {
  var threw = false;

  // Try to execute func with x, y (this is step 3)
  // use: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch

  // Report whether func threw (this is step 5)

  // Return whether func threw (this is also part of step 5)
};



var multiply = function(x, y) {
  // this if block is step 4
  // use 'typeof' keyword to check if both x and y are numbers:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
  if ("** some check goes here **") {
    // do something here
  }
  else return x * y;
};


// here, perform step 1, using assertThrows() to call multiply()
