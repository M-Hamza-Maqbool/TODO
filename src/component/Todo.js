import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function ToDO({todos,completetodo, removeTodo, updateTodo }) {

    const [edit, setedit] = useState({
        id : null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id,value);
        setedit({
            id : null,
            value: ''
        })
    }
    if (edit.id ){
        return <TodoForm  edit={edit} onSubmit={submitUpdate}/>
    }
    return todos.map((todo,index)=>(
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
             <div key={todo.id} onClick={()=> 
                {  completetodo(todo.id)}
                  }>
                {todo.text}
             </div>
             <div className='icons'>
               <button  className='delete-icon'
               onClick={()=>{
                   removeTodo(todo.id)
               }}>Delete </button>
               <button className='edit-icon'
               onClick={()=>{
                   setedit({
                       id : todo.id,
                       value : todo.text
                   })
               }}
               
               >Edit </button>

             </div>
        </div>
    ))
}

export default ToDO
