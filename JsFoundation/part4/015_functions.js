/**
 // function greet(name){
 //     console.log(`Hello  ${name}`);
 
 // }
 // greet("hitesh")






 * 1.Write a function named 'makeTea' that takes one parameter, 'typeOfTea', and returns a string like "Making green tea" when called with "green tea". 
 * Store the result in a variable named "teaOrder". 
 */


 function makeTea(typeOfTea){
    return `Making ${typeOfTea}`;
    console.log(test);
 }
 let teaOrder = makeTea("lemon tea");
//  console.log(teaOrder);



/**
 2. Create a function named 'orderTea' that takes one parameter,'teaType'. Insdide this function, create another function named 'confirmOrder' that returns a message like '"Order confirmed for chai"'.
 Call 'confirmOrder' from within 'orderTea' and return the result.
 */

 function orderTea(teatype){

    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
 }

 let orderConfirmation = orderTea("chai")
//  console.log(orderConfirmation);


/**
 * Write an arrow function named 'calculateTotal' that takes two parameters : 'price' and 'quantity'.The function should return the total cost by multiplying the 'price' and 'quantity'. 
 * Store the result in a variable named 'totalCost'. 
 */

// function greet (){}  // normal function 
// const greet =() => {} // arrow function 


// Shortcut how to wrtie arrow function in one single line 

const calculateTotal= (price, quantity) => price * quantity 



/**
 * Write a funxtion named 'processTeaOrder' that takes another function, 'makeTea', as parameter and calls it wiuth the argument "earl grey".
 * Return the result of calling 'makeTea'.
 */


function makeTea(typeOfTea){
   return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
   return teaFunction('earl grey')
}
// THe original name of the teafunction is maketea so thats why it is returining nothing 

let order = processTeaOrder(makeTea)
console.log(order);
 



