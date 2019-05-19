// array that needs to be sorted
var unsortedArr = [
  10,
  5,
  25,
  1,
  33,
  90,
  17,
  20,
  7,
  9,
  22,
  37,
  99,
  1000,
  100,
  200,
  300
];

// declare a variable that will act as a flag to let us know once the array has
// finished sorting
var sorted;

function bubbleSort(arr) {
  // everytime we iterate over the array, we know at least the last value has
  // been sorted, so we don't have to iterate to that index again
  var end = arr.length - 1;
  // set flag to true, if we have to swap any values, the flag will be then set
  // to false
  sorted = true;
  for (var i = 0; i < end; i++) {
    // if the value of the current index is less than the next index, we know
    // the list is not properly sorted and swap their positions.
    if (arr[i] > arr[i + 1]) {
      // we have to create a temporary variable to hold a value, so we can swap
      // the values of the two positions
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      sorted = false;
    }
  }
  end--;
}

do {
  bubbleSort(unsortedArr);
} while (!sorted);

console.log(unsortedArr);
