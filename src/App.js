import React, { Fragment } from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import InputTodo from "./components/Todos/InputTodo";
import ListTodos from "./components/Todos/ListTodo";

function App() {
  return (
  <Fragment>
    <Navbar />
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  </Fragment>
  )
}

export default App;
