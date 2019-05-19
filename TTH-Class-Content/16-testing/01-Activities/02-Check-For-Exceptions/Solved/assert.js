"use strict";

var assertThrows = function(func, x, y) {

  // Try to execute func with x, y
  try {
    func(x, y);
  } catch (err) {
    // If func throws, note it.
    console.log(err)
  }



};

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Either x or y is not a number. Please try again with numbers.";
  } else return x * y;
};

assertThrows(multiply, 3, 2);
