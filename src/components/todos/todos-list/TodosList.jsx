import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllTodos, deleteTodo } from '../../../core/api/todos.api';
import { TodoCard } from '../todo-card/TodoCard';

const todosListStyle = {
    margin: '5px',
    flexWrap: 'wrap'
}

export function TodosList(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        getAllTodos(searchParam).then((result) => {
            setTodos(result);
        });
    }, [props.location.search]);

    const onDelete = (id) => {
        deleteTodo(id).then(() => {
            setTodos((prevState) =>{
                return prevState.filter(todos => todos.id !== id);
            })
        })
    };

    return (
        <div className="todos-list-wrapper d-flex" style={todosListStyle} >
            {todos.map(todo => <TodoCard todo={todo} key={todo.id} onDeleteClick={onDelete}/>)}
        </div>
    );
}
