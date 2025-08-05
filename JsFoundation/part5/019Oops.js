
// objects can be created by functional cionstructor or consdtructor function as wwell yk 





// this we define object here 
let car = {
    make: "BMW",
    model: "M5 CS",
    year: 2019,
    // this function can have a name too.and it can take a parameter too . okay u get it 
    start: function (){
        // inroder to acess any property in this class use this. 
        return `${this.make} ${this.model} car got started in ${this.year}`
    }
}

console.log(car.start())



// advantage with the constructor function is that we can create as many people as we like okay 

function Person(name,age){
    this.name = name;
    this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john.name);









// PROTOTYPE CHAIN  
// in this prototype i can access this whole chaing and can inject my own methods okay 


function Animal(type){
    this.type = type
}

Animal.prototype.speak= function(){
    return `${this.type} makes a sound`
}


Animal.prototype.hitesh= function(){
    return `Custom method ${this}`
}






let myArray = [ 1, 2, 3]
// this is calling them as methods
console.log(myArray.hitesh())
let myNewArray = [ 1, 2, 3, 4, 5, 6]
console.log(myNewArray.hitesh())






        // CLASS in JS

class Vehicle {
    //  in constructor u can ask what other paramter you want to ask 
    // this is a method 
    constructor (make , model){
        this.make =  make,
        this.model = model
    }
    // this is the method it doesnt need function keyword okay thats the only advantage 
    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

        // INHERITANCE IN JS

class Car extends Vehicle{
    // car will have a drive method  
    drive(){
        return `${this.make} : Thiss is an inheritance example`
    }
}

let myCar = new Car("Toyota" , "Supra")
console.log(myCar.start())
console.log(myCar.drive())

let vehOne = new Vehicle("Toyota", "Corolla");
console.log(vehOne.make) 


        // ENCAPSULATION 

        // restrict the direct access to the object data 
class BankAccount {
    #balance = 0     // after using " # "  then that will only be accesed within the class but annybody outside the class will not be able to acess it 

    deposit(amount){
        this.#balance += amount
        return this.#balance
    }
    getBalance(){
        return `$ ${this.#balance}`
    }
}
let account = new BankAccount()
console.log(account.getBalance())



        // ABSTRACTION
// it hides the complex implementation detail 
class CoffeeMachine {
    start(){
        // call DB
        // filter values 
        return `Starting the machine...`
    }
    brewCoffee(){
        // cpmlex calculations
        return `Brewing coffee`
    }

    pressStartButton(){
        let msgone = this.start();
        let msgtwo = this.brewCoffee()
        return `${msgone} \n${msgtwo}`
    }

}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
console.log(myMachine.pressStartButton())



        // POLYMORPHISM
        // more then one form is polymorphism  

        // method name is same but the behaivour is differernt okaty 
class Bird {
    fly () {
        return `flyingg...`
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`
    }
}

let bird = new Bird()
let penguin = new Penguin()
console.log(bird.fly())
console.log(penguin.fly())



        // STATIC METHOD = statics are special method which can only be called by the class itself nobody else can call it

class Calculator{
    static add(a, b){
        return a + b
    }
}

    // we can't use this way 
// let miniCal = new Calculator()
// console.log(miniCal.add( 2, 3 ))

        //  instead we can directly call 'calculator'
console.log(Calculator.add( 2, 3))



        // GETTERS AND SETTERS

class Employee {
    #salary
    constructor (name , salary){
        if (salary < 0 ) {
            throw new Error("Salary cannot be in negative")
        }
        this.name = name,
        this.#salary = salary
    }

    get salary(){
        return "You are not allowed to see salary"
    }

    set salary(value){
        if (value < 0 ) {
            console.error("Invaiid salary")
        }
        else{
            this._salary = value
        }
    }
}

let emp = new Employee("Ayush",50000)
console.log(emp._salary)
emp.salary = -60000