
function makeTea(typeOfTea){
   return `maketea: ${typeOfTea}`;
}

function processTeaOrder(teaFunction){
   return teaFunction('earl grey')
}
// THe original name of the teafunction is maketea so thats why it is returining nothing 

let order = processTeaOrder(makeTea)
console.log(order);
 