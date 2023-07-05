import React, { useState, useEffect } from "react";
import GlobalTitle from "./GlobalTitle";
import GroceryForm from "./GroceryForm";
import GroceryList from "./GroceryList";
import { nanoid } from "nanoid";
import { Container, Row, Col } from "react-bootstrap";
import { MdDeleteOutline } from "react-icons/md";

const getLocalStorage = () => {
  let list = localStorage.getItem('text');
  console.log(list)
  if(list) {
    list = JSON.parse(localStorage.getItem('text'))
  }
  else {
list = []
  }
  return list
}
const setLocalStorage = (GroceryList) => {
  localStorage.setItem("text", JSON.stringify(GroceryList));
};

const defaultList = JSON.parse(localStorage.getItem("text") || '[]');

const Grocery = () => {
  const [inputVal, setInputValue] = useState("");
  const [todos, setTodos] = useState(defaultList);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputVal.trim() !== "") {
      const newTodoItem = {
        id: nanoid(),
        completed: false,
        text: inputVal,
      };
      const newTodoItems = [...todos, newTodoItem];
      setLocalStorage(newTodoItems);
      setTodos(newTodoItems);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setLocalStorage(updatedTodos);
  };

  const handleCheckboxChange = () => {
    setActive(!active);
  };

  const editItems = (id) => {
    const newitems = todos.map((todo) => {
      if (todo.id === id) {
        const newItem = { ...todo, completed: !todo.completed };
        return newItem;
      }
      return todo;
    });
    setLocalStorage(newitems);
    setTodos(newitems);
  };
  return (
    <>
        <Container className="mt-3 mb-2">
      <Row>
        <Col lg={6} md={6} sm={6} xs={12} className="mx-auto">
        <GlobalTitle title="To Do App" />
      <GroceryForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        inputVal={inputVal}
      />
      {todos.map((todo, id) => (
        <GroceryList
          todo={todo}
          id={id}
          key={id}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteTodo={handleDeleteTodo}
          editItems={editItems}
        />
      ))}
        </Col>
        </Row>
        </Container>
      
    </>
  );
};

export default Grocery;
