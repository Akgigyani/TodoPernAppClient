import React, {useState, useEffect, Fragment} from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './todo.css';


const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description);
    
    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Fragment>
             <Button variant="primary" onClick={handleShow} style={{
                    border: "0px",
                    background: "transparent"
                  }}
                >
                  <i
                    className="bi bi-pen-fill"
                    style={{ fontSize: "1.3em", color: "black" }}
                  ></i>
            </Button>

            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton onClick={() => setDescription(todo.description)}>
                <Modal.Title>Edit Action</Modal.Title>
                </Modal.Header>
                <Modal.Body><input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} /></Modal.Body>
                <Modal.Footer>
                <Button className="saveButton" onClick = {e => updateDescription(e)}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    )
}

export default EditTodo;