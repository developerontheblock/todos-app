import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {UsersList} from '../users/users-list/UsersList';
import {User} from '../users/user/User';
import {AuthenticatedRoute} from '../../../core/guards/AuthenticatedRoute';

export function Main(){

    return(
        <div className="main-content">
         <Switch>
             <AuthenticatedRoute exact path="/users" component={UsersList} />
             <AuthenticatedRoute exact path="/users/:id" component={User} />
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