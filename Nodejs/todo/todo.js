const fs = require('fs');
const filePath  = "./tasks.json";


const loadTasks = () => {
    try{
      const dataBuffer = fs.readFileSync(filePath);
    //   this is the databuffer u have to convert it into string okayt  and then it acts as datajson 
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);

    }catch (error){
        return [];
    }
}



// sync and asyn method here too 

// now u have to save the tasks
const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}




const addTask = (task) => {
// first load the existing tasks
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log("task added ", task);


}



const listTasks = () => {
    const tasks = loadTasks();
    tasks.forEach((task, index) => console.log(`${index + 1} - ${task.task}`));
}


const command = process.argv[2];
const argument = process.argv[3];








if(command === 'add'){
    addTask(argument);
}else if(command === 'list'){
    listTasks();
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("Command not Found");
}






// run commands 
//  node todo/todo.js add "buy milk" 
// node todo/todo.js list



// do it for other remove method 
