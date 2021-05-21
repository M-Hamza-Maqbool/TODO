import React, { useState } from 'react'

function TodoForm(props) {

  // console.log('props',props)
  const [input, setinput] = useState('');
  // alert("halo")

  const handleSubmit = (e)=>{

        e.preventDefault()
        props.onSubmit({
          id: Math.floor(Math.random() * 1000),
          text: input
        })
        setinput('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text"
        placeholder="Add Todo"
        value={input}
        className="todo-input"
        onChange={(e) => {
          setinput(e.target.value)
        }}
      />
      <button className="todo-button">Add ToDo</button>

    </form>
  )
}

export default TodoForm
