
// thats how we use constructor function 
function Person(name, age){
    this.name = name
    this.age = age 
}



function Car( make , model ) {
    this.make = make;
    this.model = model;
}


// this new keyword is imp okay 
// new kyword erfers to newly created object insdide hte functions ok ay 
// and here we are creating differernt objects okay as u  na see 

let myCar = new Car( "Toyota" , "SUPRA")
console.log(myCar)

let myNewCar = new Car( "B M W" , "M5 CS Competition")
console.log(myNewCar)











function Tea(type) {
    this.type = type
// we already know u can create arrow function insdiee function 
    this.describe = function(){
        // access the internal object u have to use this keyword okay 
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea( "lemon tea" )
console.log(lemonTea)
console.log(lemonTea.describe())








// ...


function Animal(species){
    this.species = species
}

// this prototype method only works on object. okayu 
// here once you have access the prototype u can now add a property or method to it 
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}

let dog = new Animal ("dog")
console.log(dog.sound())

let cat = new Animal ("cat")
console.log(cat.sound())



//  ....

function Drink(name){
    if(!new.target){
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}

let tea = new Drink ("tea");
let coffee = Drink("coffee"); // Error: Drink must be called with new keyword
