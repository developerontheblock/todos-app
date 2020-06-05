import React from 'react';
import { useState } from 'react';
import { TodoCard } from '../todo-card/TodoCard';
import { useEffect } from 'react';
import { getMyTodos } from '../../../core/api/todos.api';


const MyTodosListStyle = {
    margin: '5px',
    flexWrap: 'wrap'
}

export function MyTodos(props) {

    const [userTodos, setUsertodos] = useState([]);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        getMyTodos(searchParam).then((todos) => {
            setUsertodos(todos);
        });
    }, [props.location.search]);

    return (
        <div className="my-todos-wrapper d-flex" style={MyTodosListStyle}>
            {userTodos.map(todo => <TodoCard todo={todo} key={todo.id} />)}
        </div>
    )
}