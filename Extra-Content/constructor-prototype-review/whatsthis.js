/**
 * Return the holiday.
 */

function whatsThis(){
  
    if(this.myName === 'Jack'){
      this.holiday = "Christmas";
    }else if(typeof this.myName === "undefined"){
      this.holiday = "Undefined is undefined at line 0";
    }else{
      this.holiday = "Halloween";
    }
  
    return this.holiday;
  }
  
  var skeleton = {
    myName: 'Jack'
  };
  
  var me = {
    myName: 'Tish'
  };
  
  
  var whatsThat = whatsThis.call(skeleton);
  console.log(whatsThat.holiday); // Undefined because this defaulted to the window or global -> unaccessible in node
  console.log(whatsThis.call(skeleton)); // Christmas
  console.log(whatsThis.call(me)); // Halloween
  
  
  
  
  // call binds this to the object passed in
  
  
  whatsThis.myName = "Camden";
  
  console.log(whatsThis()); // Undefined is undefined at line 0
  
  // But this inside the function refers to the global this (window in the browser)
  // In node though its the module -> but in this case its just undefined because we are not scoped to a module
  
  
  // This is also undefined in node; but in the browser, it will resove to Halloween because of the global object
  var myName = "Kathryn";
  console.log(whatsThis()); 
  
  // Why is the above important for the constructor conversation
  // Because of line 29
  
  // 4 things happen when constructors and the new keyword is used
  
  // A brand new object is created (aka constructed) out of thin air.
  // The newly constructed object is [[Prototype]]-linked.
  // The newly constructed object is set as the this binding for thatfunction call.
  // Unless the constructor function returns its own alternate object, thenew-invoked function call will automatically return the newlyconstructed object.
  
  // I tried to set myName = Camden; but I got an undefined message
  
  // what happens if I what a new function
  
  function WhatsThis(myName){
    this.myName = myName;
  
    if(this.myName === 'Jack'){
      this.holiday = 'Christmas';
    }else if(typeof this.myName === 'undefined'){
      this.holiday = "Undefined is undefined at line 0";
    }else{
      this.holiday = "Halloween"
    }
  }


  // If a normal data accessor (see Chapter 3) property named foo is found anywhere higher on the [[Prototype]] chain, and it's not marked as read-only (writable:false), then a new property called foo is added directly to myObject, resulting in a shadowed property.
  // If a foo is found higher on the [[Prototype]] chain, but it's marked as read-only (writable:false), then both the setting of that existing property as well as the creation of the shadowed property on myObject are disallowed. If the code is running in strict mode, an error will be thrown. Otherwise, the setting of the property value will silently be ignored. Either way, no shadowing occurs.
  // If a foo is found higher on the [[Prototype]] chain and it's a setter (see Chapter 3), then the setter will always be called. No foo will be added to (aka shadowed on) myObject, nor will the foo setter be redefined.

  // Now lets create a new instance
  
  var colorEverywhere = new WhatsThis("Camden");
  console.log(colorEverywhere.holiday); // Halloween
  console.log(colorEverywhere.myName); // Camden
  
  // Before when I assigned whatsThis to a variable and tried to access holiday, holiday was undefined
  // Now because I used a constructor, an object exists for this so holiday exists
  
  // SO NOW PROTOTYPE
  // PROTOTYPE IS LIKE DNA; CHILDREN INHERIT IT; CHILDREN CAN CHANGE THE DNA ON THEMSELVES;
  // BUT NOT THE PARENT AND PARENTS CAN'T ACCESS THE CHILDRENS DNA

function Dinosaur(breed){
  if(!this instanceof Dinosaur){
    return new Dinosaur(breed);
  }
  this.breed = breed;
  this.exinct = true;
  this.hasDNA = false;
}

Dinosaur.prototype.getBreed = function(){
  return this.breed;
}

Dinosaur.prototype.canReplicate = function(){
  if(this.exinct === false && this.hasDNA === true){
    return true;
  }else{
    return false;
  }
}

 function Velociraptor(){
  if(!this instanceof Velociraptor){
    return new Velociraptor();
  }

  this.speed = "Super fast";
  this.intelligence = "Super smart";
  this.special = "Pack animal";
  this.exinct = false;
  this.hasDNA = true;
}

Velociraptor.prototype = new Dinosaur('Velociraptor');

Velociraptor.constructor = Velociraptor;


function TRex(){
  if(!this instanceof TRex){
    return new TRex();
  }

  this.eat = "EVERYTHING";
}

TRex.prototype = new Dinosaur('TRex');

TRex.constructor = TRex;

var blue = new Velociraptor();

console.log(blue.getBreed());
console.log(blue.speed);
console.log("Is Blue exinct" + blue.exinct);
console.log("Can Blue replicate: " + blue.canReplicate());

var tyronious = new TRex();

console.log(tyronious.getBreed());
console.log(tyronious.eat);
console.log("Is tyronious exinct" + tyronious.exinct);
console.log("Can tyronious replicate: " + tyronious.canReplicate());

var triceratops = Object.create(Dinosaur, ({'breed': {value: 'Triceratops'}, 'name': {value: 'Sarah'}}));

console.log(triceratops.name);
console.log(triceratops.breed);
