import React, { Fragment } from "react";
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodo";

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
