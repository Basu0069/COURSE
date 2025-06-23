// javascript is just a mask over prototype based 

// prototype based -> javascript -> class -> Oriented based 
//  you gonna learn that eveything is prototype based see it yourseft 
//  is is truely Object based but behind the scene it is purely prototype based

// To check prototype : open chrome 
// let myVals = [1,2,3]

// myVals 
// there you will se the prototype: Array 



// So we are taking an object here see 



let computer = { cpu:12};
let lenovo = { screen: "HD",
                __proto__: computer
};
let tomHardware = {};

// console.log(computer);
// two ways to access it.. `computer ` , computer.cpu 
// the second one is the dunder prototypee __ see 

// console.log(`computer `, computer.__proto__); // it is showung null because nobody is overwriting it  there is no access of it okay . it will show the defualt properties okay 
console.log(`lenovo `, lenovo.__proto__); // these are custom properties u have written okay so u can see it 




// THis is the way of accessing for any particular object or anything  u can use dunder prototype 


// computer --- prototype --- ram and cpu 
//  lenovo --- prototype --- screen: HD 
//  if u want to access then prototype connected to another prototype okay u get it 




// ANother way of doin' it 



// this is prefer because it can accessible from anywhere 

let genericCar = {tyres: 4}

let tesla = {
    driver: "AI"
}

Object.setPrototypeOf(tesla,genericCar)
// i want to access all tbe porperties of genericCar in Tesla 

// console.log(`tesla `, tesla);
// console.log(`tesla `, genericCar);
// console.log(`tesla `, tesla.tyres);
console.log(`tesla `,Object.getPrototypeOf(tesla));







// Research hasOwnProperty on oyur own 

const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false