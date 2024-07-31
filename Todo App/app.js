let todo=[];
let req=prompt("pleace enter your request:");
console.log(req);
while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }

    if(req == "list"){
        console.log("___________");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("____________");
    }else if(req =="add"){
        let task= prompt("Enter your task you want to add:");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx= prompt("Enter your index you want to delete:");
        todo.splice(idx,1);
        console.log("task delated")
    }else{
        console.log("wrong task please enter right task")
    }
    req=prompt("pleace enter your request:");
}