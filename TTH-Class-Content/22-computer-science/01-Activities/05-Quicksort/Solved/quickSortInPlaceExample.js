var arr = [];
for (var index = 0, t = 400000; index < t; index++) {
  arr.push(Math.round(Math.random() * t));
}

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {

  var pivot = items[Math.floor((right + left) / 2)];
  var i = left;
  var j = right;


  while (i <= j) {

    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(items, left, right) {

  var index;

  if (items.length > 1) {

    index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }

  }

  return items;
}

console.log("Pre Sort:", arr.join(" "));
var result = quickSort(arr, 0, arr.length - 1);
console.log("Post Sort:", result.join(" "));
console.log("DONE!");
