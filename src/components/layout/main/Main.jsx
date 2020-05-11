import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {UsersList} from '../users/users-list/UsersList';
import {User} from '../users/user/User';

export function Main(){

    return(
        <div className="main-content">
         <Switch>
             <Route exact path="/users" component={UsersList}></Route>
             <Route exact path="/users/:id" component={User}></Route>
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