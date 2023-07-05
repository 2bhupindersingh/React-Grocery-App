import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { MdDeleteOutline } from "react-icons/md";

const GroceryList = ({todo, id, handleDeleteTodo, editItems}) => {
    // const [ischecked, setIsChecked] = useState(todo.completed)
    // console.log(ischecked)
  return (
    <div key={id} className='todo-list d-flex'>
        <input
        type="checkbox"
        className='me-2'
        checked={todo.completed}
        onChange={()=> editItems(todo.id)}
      />
    <h6 className='me-auto' style={{textDecoration: todo.completed ? 'line-through' : ''}}>{todo.text}</h6>
    <Button variant="danger" onClick={() => handleDeleteTodo(todo.id)}>
      <MdDeleteOutline />
    </Button>
  </div>
  )
}

export default GroceryList