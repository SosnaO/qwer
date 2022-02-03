import React from "react";

import "./App.css";

import { useState, useEffect } from "react";
import TodosList from "./components/TodosList";
import TodosForm from "./components/TodosForm";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todo")) {
      setTodos(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);

  useEffect(
    (prevState) => {
      if (todos !== prevState) {
        localStorage.setItem("todo", JSON.stringify(todos));
      }
    },
    [todos]
  );
  const deleteTodos = (todoId) => {
    setTodos(() => todos.filter((todo) => todo.id !== todoId));
  };
  const visibleTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(filter.toLowerCase())
  );

  const formSubmitHandler = (data) => {
    if (todos.find((todo) => todos.name === data.name)) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setTodos((prevState) => [data, ...prevState]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TodosForm onSubmit={formSubmitHandler} />
      <TodosList
        contacts={visibleTodos}
        // onChange={changeFilter}
        onDelete={deleteTodos}
      />
    </div>
  );
}
