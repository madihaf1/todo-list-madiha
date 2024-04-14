import inquirer from "inquirer"

// todos array=
// function=
//operation=

let todos : string[]= ["Danish","Farhan"]

async function createtodo (todos:string[]){

    do{
        let ans = await inquirer.prompt({
            type:"list",
            message:"Select an operation",
            name:"select",
            choices:["add","update","view","delete"]
        })
        if(ans.select == "add"){
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"add item...",
                name:"todo",
            });
        todos.push(addTodo.todo)
        console.log(todos)
        }
        if(ans.select == "update"){
            let updateTodo = await inquirer.prompt({
                type:"list",
                message:"select item for update",
                choices:todos.map(item => item),
                name:"todo"
            })
            let addTodo = await inquirer.prompt({
                type:"input",
                message:"add item...",
                name:"todo", 
            });
    
            let newTodos = todos.filter(val => val !== updateTodo.todo)
            todos = [...newTodos,addTodo.todo]
            console.log(todos)
        }
        if(ans.select == "view"){
            console.log(todos)
        }
     if(ans.select == "delete"){
       let deleteTodo = await inquirer.prompt({
            type:"list" ,
            message:"select item for update",
            name:"todo",
            choices:todos.map(item => item)
     })
     let newTodos = todos.filter(val => val !== deleteTodo.todo)
     todos=[...newTodos]
     console.log(todos);
    
        }

    }while(true)
   
}

createtodo(todos);