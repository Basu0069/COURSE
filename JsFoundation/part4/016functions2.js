
/**
 * 4. Write a function named ' processTeaOrder' that takes another function, 'makeTea' , as a paramter and calls it wit the argument ' "earl grey" . 
 * Return the result of calling ' makeTea'. 
 */



function makeTea(typeOfTea){
    return `maketea: ${typeOfTea}`;
}

// andar mei makeTea likha h it doesnt make any sense okay 
function processTeaOrder(teaFunction){
    return teaFunction('earl grey');
}

 let order = processTeaOrder(makeTea);
 console.log(order);

//  Search hhigher order function js mdn to get more knowledge 
//  ye hi h higher order function okay.







/**
 * 5. Write a function named ' createTeaMaker' that return another function. The returned function should take one parameter, ' teaType', and return a message like ` "Making greentea" `,
 *Store the returned function in a variable named 'teaMaker` and call it with "green tea"`. 
*  
 */

function createTeaMaker(name){
    let score = 100 
    return function(teaType){
        return `Making ${teaType} ${name} ${score}`;
        // i still have access to this name from the outside u get it 
        // i still have access to score without passing in it thats special feature of javascript which is only evoked insdied the function not anything else okay 
    };
}

let teaMaker  = createTeaMaker("hitesh ");
// execute 1 way 
// console.log(teaMaker("green tea "));

// execute 2 way 
let result = teaMaker("green Tea");
console.log(result);