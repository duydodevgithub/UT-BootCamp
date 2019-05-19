function User(first_name, last_name, email) {

  // Note that we don't create a new object...
  if (this instanceof User){

    this.first_name = first_name;

    this.last_name = last_name;

    this.email = email;

 }
 else {
   return new User(first_name, last_name, email)
 }
  // ...Or include a return statement.
}

// But we must call this function with new in front!
console.log(new User("James", "Kirk", "james@starshipenterprise.tech"));

// If we don't...
var james = User("James", "Kirk", "james@starshipenterprise.tech");

// ...Our variable doesn't initialize...
console.log(james); // undefined

/* ...And we pollute the global namespace. These should all be undefined.
 *   In strict mode, JavaScript throws an error when you do this.
 *   This is one of the many reasons not to forget to 'use strict'! */
console.log(global.first_name); // 'James'
console.log(global.last_name); // 'Kirk'
console.log(global.email); // 'james@starshipe







]]
]
nterprise.tech'
