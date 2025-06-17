 /*
 1.Write a 'for' loop that loops through the array ["green tea","black tea","chai","oolong tea"] and stops the loop when it finds "chai".

 Store all teas before " chai" in a new array named ' selectedTea'.

 */

 let teas = ["green tea", "black tea","chai","oolong tea"];
 let selectedTeas=[]; // ye ek khali array bna di hj okaye 


 for(let i = 0; i<teas.length;i++){
    if(teas[i]==='chai'){
        break;
    }
    selectedTeas.push(teas[i])
 }
 console.log(selectedTeas);


/* 2. Write a for loop that loops through the arrray ["london","New York","Paris","Berlin"] and skips "Paris". 
Store the other cities in a new array named 'visitedCities'. */

// let cities = ["London","New York","Paris","Berlin"];
// let visitedCities=[];

// for(let i=0;i<cities.length;i++){
//     if(cities[i] === 'paris' || cities[i]==="Paris"){  
//         continue;
//     }

//     visitedCities.push(cities[i]);
// }
// console.log(visitedCities);


/* 
3. Use a for -of loop to iterate through the array [1,2,3,4,5] and stop when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'.
*/

 let numbers = [1,2,3,4,5]
 let smallNumbers=[]

//  num is individual element and numnbers is array

 for (const num of numbers){
    if(num ===4){
        break;
    }
    smallNumbers.push(num);
 }
 console.log(smallNumbers);



/*
4. Use a 'for-of' loop to iterate thorugh the array '["Chai","green tea","herbal tea","black tea"] and skip "herbal tea";.
Store the other teas in an array named 'preferredTeas'.
*/

 let teaTypes=["chai","green tea","herbal tea","black tea"];
 let preferredTeas= [];
  

 for(const tea of teaTypes){
    if(tea === "herbal tea"){
        continue;
    }
    preferredTeas.push(tea)
 }
console.log(preferredTeas);




//  5.Use a 'for-in' loop to loop through an object containing city populations.
//  Stop the loop when the population of "Berlin" is found and store all previous cities' populations in a new object named 'cityPopulations'.
 
//  let citiesPopulation={
//  "London": 8900000;
//  "New York": 8400000,
//  "Paris": 2200000,
//  "Berlin": 3500000};

 


 let citiesPopulation={
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}; // this is not a block of code this is an object okay  it has key and value 





let cityNewPopulations= {};
// console.log(Object.keys(citiesPopulation)); // aise likhte h thik h ye wriiten h alr search it on javascript 
// console.log(Object.values(citiesPopulation)); 

// // THere are lots of methods of object just search it up okie 


// for (const city in citiesPopulation) {  // const key mtlb it will look thorugh each key in object 

    if(city == "Berlin"){
        break;
    }
//  console.log(city);
//  console.log(citiesPopulations[city]); // make sure to use squarre bracket insdie it okay
// key =value 
// cityNewPopulations[city] = citiesPopulation[city]
//     }
// console.log(cityNewPopulations);   





/**
 6.  Use a 'for-in' loop to loop through an object contaiining city populations.
 Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'. 
 
 let worldCities= {
 "Sydney": 5000000,
 "Tokyo": 9000000,
 "Berlin": 3500000,
 "Paris": 2200000};
 
 */

//  let worldCities= {
//     "Sydney": 5000000,
//     "Tokyo": 9000000,
//     "Berlin": 3500000,
//     "Paris": 2200000
// };
// let largeCities={};

// for (const city in worldCities) {
//    if(worldCities[city]< 3000000){
//     continue;
//    }
//    largeCities[city] = worldCities[key];
// }
    


// from here


/**
 7. Write a 'forEach' loop tht iterates through the array ["earl grey", "green tea", "chai","oolong tea"]'. 
 Stop the loop when "chai" is found, and store all previous tea types in an array named 'availableTeas'. 
 */

//  Study for each loop on online in mdn reference 
 let teaCollection =["earl grey","green tea","chai","oolong tea"];
 let availableTeas=[];
//  teaCollection.forEach((tea) => {
//     console.log(tea);
//  });

// () => {
//     console.log("abc");
// }



//  define a function 
//  function hello(){
//     console.log("abc");
//  }

// Write a function insdie for each loop 

// tea ke andar baari baari aarhe h sab jese phele aaya earl grey, fir green tea , fir chai aise 
// Function ke andar tu break ni use kr skta 
// teaCollection.forEach(function(tea){
//     if(tea === 'chai'){
//         return;
//     }
//     availableTeas.push(tea);
// });
// console.log(availableTeas);


/**
 * 
8.Write a ' forEach' loop that iterates througgh the array '["Berlin","Tokyo","Sydney","Paris"]'.replace
Skip "Sydney" and store the other cities in a new array named ' traveldCities'.replace

*/


let myWorldCities=["Berlin","Tokyo","Sydney","Paris"];
let traveldCities=[];

// myWorldCities.forEach((City) => {
//     if(city ==="Sydney"){
//         return;
//     }
//     traveldCities.push(city);
// });

// They both behave same as exactly 
// myWorldCities.forEach(function (City){
//     if(city ==="Sydney"){
//         return;
//     }
//     traveldCities.push(city);
// });


// console.log(traveldCities);



/**
 * 9. Write a 'for' loop that iterates through the array '[2,5,7,9]';
 * Skip the value '7' and multiply the rest by 2.Store the results in a new array named 'doubedNumbers'. 

 */
let myNumbers= [2,5,7,9];
let doubleNumbers= [];
for(let i=0;i<myNumbers.length;i++){
    if(numbers[i] ===7){
        continue;
    }
    doubledNumbers.push(numbers[i]*2);
}


/**
 * 10. Use a 'for-of' loop to iterate through the array '["chai","green tea","black tea","jasmine tea","herbal tea"]'
 * and stop when the length of the current tea name is greater than 10. 
 * Store the teas iterated over in an array named 'shortTeas'. 
 */


let myTeas= ["chai","green tea","black tea","jasmine tea","herbal tea"];
let shortTeas=[];

for(const tea of myTeas){
    if(tea.length > 10){
        break;
    }
    shortTeas.push(tea);
}












  

    