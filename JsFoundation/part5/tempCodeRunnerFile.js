nimal.prototype.speak= function(){
    return `${this.type} makes a sound`
}


Animal.prototype.hitesh= function(){
    return `Custom method ${this}`
}






let myArray = [ 1, 2, 3]
console.log(myArray.hitesh())
let myNewArray = [ 1, 2, 3, 4, 5, 6]
console.log(myNewArray.hitesh())

