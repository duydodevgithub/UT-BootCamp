//passing argumnets on methods
//top-bottom execution of function expressions

//calling method inside of function

var train = {
    material: 'steel',
    cars: 100,
    cargo:['coal','tea','bumblee sweaters','humans?'],
    velocity:[200,'SSW'],
    destination:['\'murica'],
    derail: function(traction,weather){
        if (traction===0 || weather==='sucks'){
            train.velocity=10;
            train2.velocity=-10;// FIXME:
            this.destination='heck';
            console.log('*screams*');

        }//closes if statment


    }//closes derail method


}//closes object


train2{
  velocity:-200


}




train.derail(0,'nice');

var p = 2;
p = 'sparkles';
console.log(p);
