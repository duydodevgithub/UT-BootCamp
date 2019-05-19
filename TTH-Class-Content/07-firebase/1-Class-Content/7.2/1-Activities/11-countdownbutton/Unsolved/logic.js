// Initialize Firebase (YOUR OWN APP)
// Make sure that your configuration matches your firebase script version
// (Ex. 3.0 != 3.7.1)
// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAI6hSOk55z6bwFC1UoSk-yfpW8pt14BFI",
    authDomain: "clickdown-5e529.firebaseapp.com",
    databaseURL: "https://clickdown-5e529.firebaseio.com",
    projectId: "clickdown-5e529",
    storageBucket: "clickdown-5e529.appspot.com",
    messagingSenderId: "991717445333"
  };
  firebase.initializeApp(config);


// Create a variable to reference the database
// var database = ...
  var database = firebase.database();

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
 database.ref().on("value", function(snapshot){
        console.log(snapshot.val());
        clickCounter = snapshot.val().clickCount;
        console.log('clickCounter ' + clickCounter);
        $('#click-value').html(clickCounter);


 },

  function(errorObject){
      console.log("yo this is yo error " + errorObject)

  })



// We are now inside our .on function...

// Console.log the "snapshot" value (a point-in-time representation of the database)
// This "snapshot" allows the page to get the most current values in firebase.


// Change the value of our clickCounter to match the value in the database
// ___________ = snapshot.val().______________________

// Console Log the value of the clickCounter

// Change the HTML using jQuery to reflect the updated clickCounter value

// Then include Firebase error logging
// HINT: }, function(errorObject)

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter === 0) {

    alert("Phew! You made it! That sure was a lot of clicking.");

    clickCounter = initialValue;

  }

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
    clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);


});
