import React from 'react';
import { useState } from 'react';
import { saveTodo, getTodoById } from '../../../core/api/todos.api';
import { Redirect } from 'react-router-dom';
import './TodoEdit.css'
import { useEffect } from 'react';

export function TodoEdit(props) {

    const [currentTodo, setCurrentTodo] = useState({ title: '', content: '', authorId: '', authorName: '', data: '' });
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        if (props.computedMatch.params.id) {
            getTodoById(props.computedMatch.params.id).then((result) => {
                setCurrentTodo(result.data);
            });
        }
    }, [props.computedMatch.params.id])

    const onInputChange = (event) => {
        event.persist();

        setCurrentTodo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    const ontodosave = (event) => {
        event.preventDefault();

        saveTodo(currentTodo).then(() => {
            setShouldRedirect(true);
        })
            .catch((err) => console.log(err));

    };

    return (
        <>
            {shouldRedirect && <Redirect to="/todos" />}
            <div className="Todo-edit-wrapper">
                <form className=" Todo-edit-form" onSubmit={ontodosave}>
                    <div className="form-group">
                        <label labelfor="title">Title: </label>
                        <input className="form-control" type="text" id="title" name="title" onChange={onInputChange} value={currentTodo.title} />
                    </div>
                    <div className="form-group">
                        <label labelfor="content">Content: </label>
                        <textarea className="form-control" id="content" name="content" onChange={onInputChange} value={currentTodo.content} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="status">Status: </label>
                        <select name="status" id="status" className="form-control" onChange={onInputChange} value={currentTodo.status}>
                            <option value="Active">Active</option>
                            <option value="Pending">Pending</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="priority">Priority: </label>
                        <select name="priority" id="priority" className="form-control" onChange={onInputChange} value={currentTodo.priority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">Save Todo</button>
                </form>
            </div>
        </>
    )
}
