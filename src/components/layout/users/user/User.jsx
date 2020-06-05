import React, { Component } from 'react';
import { getUserById } from '../../../../core/api/users.api';
import { getTodoByAuthorId, deleteTodo } from '../../../../core/api/todos.api';
import { UserCard } from '../user-card/UserCard';
import { TodoCard } from '../../../todos/todo-card/TodoCard';

export class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            todos: []
        }
    }

    componentDidMount() {
        const authorId = this.props.computedMatch.params.id;

        getUserById(authorId).then((response) => {
            this.setState({
                user: response.data
            });
        });

        getTodoByAuthorId(authorId).then((usertodos) => {
            this.setState({
                todos: usertodos
            });
        });
    }

    onDelete = (id) => {
        deleteTodo(id).then(() => {
            const alltodos = this.state.todos;
            const newtodos = alltodos.filter(todo => todo.id !== id);
            this.setState({
                todos: newtodos
            });
        })
    };

    render() {
        return (
            <div className="single-user">
                <UserCard user={this.state.user} />
                {this.state.todos.map(todo => < TodoCard todo={todo} key={todo.id} onDeleteClick={this.onDelete} />)}
            </div>
        )
    }
}
