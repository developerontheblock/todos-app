import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';
import { TodoStatus, TodosPriority } from '../../../core/api/todos.api';

const TodoCardStyle =
{
    maxWidth: '18rem'
}

const deleteBtnStyles =
{
    cursor: 'pointer'
}

export function TodoCard({ todo, onDeleteClick }) {

    const loggedUser = getLoggedUser();

    let todoClassByStatus = "card text-black m-3 ";
    let todoImg = "https://picsum.photos/200/100?random=1.jpg";

    switch (todo.status) {
        case TodoStatus.Active:
            todoClassByStatus += "border-primary";
            todoImg += "https://picsum.photos/200/100?random=2.jpg";

            break;
        case TodoStatus.Done:
            todoClassByStatus += "border-success";
            todoImg += "https://picsum.photos/200/100?random=3.jpg";

            break;
        case TodoStatus.Pending:
            todoClassByStatus += "border-warning";
            todoImg += "https://picsum.photos/200/100?random=4.jpg";

            break;
        default:
            todoClassByStatus += "border-info";
            todoImg += "https://picsum.photos/200/100?random=5.jpg";

            break;
    }

    let todoClassByPriority = "card text-white m-3 ";
    switch (todo.priority) {
        case TodosPriority.Low:
            todoClassByPriority += "bg-success";
            break;
        case TodosPriority.Medium:
            todoClassByPriority += "bg-warning";
            break;
        case TodosPriority.High:
            todoClassByPriority += "bg-danger";
            break;
        default:
            todoClassByPriority += "bg-success";
            break;
    }

    return (

        <div className={todoClassByStatus} style={TodoCardStyle}>
            <img className="card-img-top" src={todoImg} alt="Card image cap" />

            <div className="card-header">
                {todo.title}
            </div>

            <div className="card-body">
                <p className="card-text">{todo.content}</p>
            </div>
            <div className="card-footer bg-transparent border-dark">
                <div>Author: {todo.authorName}</div>
                <div>Created on: {todo.date}</div>
            </div>
            <div className={todoClassByPriority}>
                <label>Priority</label>
            </div>
            <div className="card-footer bg-transparent border-dark">
                {(loggedUser.isAdmin || loggedUser.id === todo.authorId) && <Link className="cursor-pointer btn btn-success btn-outline-light mr-2" to={`/todos/edit/${todo.id}`}>Edit </Link>}
                {(loggedUser.isAdmin || loggedUser.id === todo.authorId) && <span className="cursor-pointer btn btn-danger btn-outline-light" style={deleteBtnStyles} onClick={() => onDeleteClick(todo.id)}>Delete</span>}
            </div>
        </div>
    );
}