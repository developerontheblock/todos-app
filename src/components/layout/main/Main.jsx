import React from 'react';
import { Switch } from 'react-router-dom';
import { UsersList } from '../users/users-list/UsersList';
import { User } from '../users/user/User';
import { AuthenticatedRoute } from '../../../core/guards/AuthenticatedRoute';
import { UserEdit } from '../users/user-edit/UserEdit';
import { TodosList } from '../../todos/todos-list/TodosList';
import { TodoEdit } from '../../todos/todo-edit/TodoEdit';
import { MyTodos } from '../../todos/my-todos/MyTodos';
import { Home } from '../home/Home';


export function Main() {

    return (
        <div className="main-content">
            <Switch>
                <AuthenticatedRoute exact path="/home" component={Home} />
                <AuthenticatedRoute exact path="/" component={Home} />

                <AuthenticatedRoute exact path="/users" component={UsersList} />
                <AuthenticatedRoute exact path="/users/create" admin={true} component={UserEdit} />
                <AuthenticatedRoute exact path="/users/:id" component={User} />
                <AuthenticatedRoute exact path="/users/edit/:id" admin={true} component={UserEdit} />

                <AuthenticatedRoute exact path="/todos" component={TodosList} />
                <AuthenticatedRoute exact path="/todos/my-todos" component={MyTodos} />
                <AuthenticatedRoute exact path="/todos/create" component={TodoEdit} />
                <AuthenticatedRoute exact path="/todos/edit/:id" component={TodoEdit} />
            </Switch>
        </div>
    );
}

// export const MainComponent = () => {
//     return(
//         <div className="main-content">
//             <span>Main content is working</span>
//         </div>
//     );
// }