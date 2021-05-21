import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newtodo = [todo, ...todos]
        setTodos(newtodo)
        console.log(...todos)
    }

    const completetodo = id =>  {
        
        let updateTodos =todos.map(todo => {
if(todo.id === id ){
    todo.isComplete = !todo.isComplete
}
return todo;
        })
        setTodos(updateTodos);

    }; 

    const removeTodo = id =>{
 const removeArr=[...todos].filter(todo => todo.id!==id)
 setTodos(removeArr);
    }


const updateTodo = (todoid,newValue) =>{
    console.log(newValue)
    // if (!todoid.newValue || /^\s*$/.test(newValue.text)) {
    //     return
    // }
    console.log(newValue)
    setTodos(prev => prev.map( item => (item.id===todoid ? newValue : item)))
    

} 


    return (
        <div>
            <h1>What's the plan For Today</h1>
            <TodoForm onSubmit={addTodo} />
           <Todo 
           todos={todos}
           completetodo={completetodo}
           removeTodo={removeTodo}
           updateTodo={updateTodo}
           />
        </div>
    )
}

export default TodoList
