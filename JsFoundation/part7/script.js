
// Dom manipulation 

// 1)get the element  

// 2)Event listening 



// example - 1
// write addeventlisner for attracting change okay 
// this evenlistener takes 2 paramter oka , first  is what event should i listen adn second what should i perform 
// in the function it is follwoing the current index okay 
document.getElementById('changeTextButton').addEventListener("click" , function () {
    let para = document.getElementById('myParagraph')
    para.textContent = "THE PARAGRAPH IS CHANGED"
})


// example - 2

document.getElementById("highlightFirstCity").addEventListener("click" , function () {
    let citiesList = document.getElementById("citiesList")
    // we used classlist to see the class of all element 
    citiesList.firstElementChild.classList.add("highlight")
})

// example - 3

document.getElementById("changeOrder").addEventListener("click" , function () {
    let coffeeType =  document.getElementById("coffeeType")
    coffeeType.textContent = "Espresso"
    coffeeType.style.backgroundColor="brown";
    coffeeType.style.padding="5px";
})


// example - 4

document.getElementById("addNewItem").addEventListener("click" , function () {

    let newItem = document.createElement("li")
    newItem.textContent = "Egg"
    document.getElementById("shoppingList").append(newItem)
})


// example - 5

document.getElementById("removeLastTask").addEventListener("click" , function () {
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove()
})


// example - 6

document.getElementById("clickMeButton").addEventListener("click" , function () {
    alert("DOM Example")
})


// EXAMPLE - 7

document.getElementById("teaList").addEventListener("click" , function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert("You selected: " + event.target.textContent)
    }
})


// example - 8

document.getElementById("feedbackForm").addEventListener("submit" , function (event) {
    event.preventDefault();
    // that what u do majority time 
    let feedback = document.getElementById("feedbacklnput").value;
    console.log(feedback)
    document.getElementById("feedbackDisplay").textContent = `Feedback is: ${feedback}`
})


// example - 9

document.addEventListener('DOMContentLoaded' , function () {
    document.getElementById('domStatus').textContent = "DOM fully loaded"
})


// example - 10

document.getElementById("toogleHighlight").addEventListener("click" , function () {
    let descriptionText = document.getElementById("descriptionText")
    descriptionText.classList.toggle("highlight")
})