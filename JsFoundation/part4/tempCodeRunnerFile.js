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