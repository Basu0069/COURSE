        //  Asynchronous Javascript ==  
        

        // having pause -> 1)network calls   , 2)write.read files ,it takes times ,3)Time function , 4) user input  



        function sayHello () {
            console.log("I would like to say Hello")
        }
        
        setTimeout(() => {
            sayHello()
        } , 4000)
        //  this will print after some time okay 
        
        


        // synchronous code okay 
        for (let index = 0; index < 5; index++) {
            console.log(index)    
        }














        // EVENTLOOP 

// whatever u write goes into call stack  and every single time there is a event loop which keeps on checking the cell stack that do 
//  do i have something to execute in the call stack //... But sometimes these function requires some time function, ececution function  now javascrript doesnt have the capibility to execute them 
//  now it will go to the browser  and it have the capibility.. browser execute the 3whole process  and then it goes to queue  and acftet it done it goes back to again call stack okay . 
//  in the mean time all the other functions executed first okay u get it 



        // Codefile     ------   call stack    ----- browser/node/bun/deno
    

        //                         eventLOOP        ---   Queues 