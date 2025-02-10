// Primitive data types -> string, boolean, number ,null , undefined, symbol 
// Non-Primitive -> objects , array and functions 
  



// Number 

let balance = 120 
let anotherBalance = new Number(120);



// console.log(balance)
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());



// boolean 
  let isActive = true
  let isReallyActive= new Boolean(true) // not receommended 


//   null and undefined 
let firstname;
let lastname= undefined
let happyname=null
// console.log(firstname)
// console.log(lastname)
// console.log(happyname)



// String 

let myString="hello"
let myStringOne="Hola"
let username= "hitesh"

let oldGreet= myString + " " + "hitesh"
// console.log(oldGreet);

let greetMessage= `Hello ${username} !`
// console.log(greetMessage);

let demoOne=`Value is ${2*2}`
// console.log(demoOne)

let sm1= Symbol("hitesh");
let sm2= Symbol("hitesh");
// symbol it guarantess the uniqueness 

console.log(sm1 ==sm2)


