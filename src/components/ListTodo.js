import React, { Fragment, useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const deleteTodo = async (id) => {
    try {
        const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
            method: "DELETE"
        })

        setTodos(todos.filter(todo => todo.todo_id != id));
    } catch (err) {
        console.error(err.message);
    }
  }

  return (
    <Fragment>
      <table
        className="table mt-5 text-center"
        style={{ border: "1px solid black" }}
      >
        <thead className="thead-dark">
          <tr>
            {/* <th scope="col">#</th> */}
            <th style={{ border: "1px solid black" }} scope="col">
              Task
            </th>
            <th style={{ border: "1px solid black" }} scope="col">
              Edit
            </th>
            <th style={{ border: "1px solid black" }} scope="col">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td style={{ border: "1px solid black" }}>{todo.description}</td>
              <td style={{ border: "1px solid black" }}>
                <button
                  style={{
                    border: "0px",
                    background: "transparent"
                  }}
                >
                  <i
                    className="bi bi-pen-fill"
                    style={{ fontSize: "1.3em", color: "black" }}
                  ></i>
                </button>
              </td>
              <td style={{ border: "1px solid black" }}>
                <button style={{ 
                    border: "0px",
                    background: "transparent" 
                    }} onClick={() => deleteTodo(todo.todo_id)}>
                  <i
                    className="bi bi-trash-fill"
                    style={{ fontSize: "1.3em", color: "red" }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
