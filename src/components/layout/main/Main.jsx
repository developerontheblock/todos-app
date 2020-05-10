import React, {useEffect, useState} from 'react';
import { getAllUsers } from '../../../core/api/users.api';

export function Main(){

    const [users, setUsers] = useState([]);

    useEffect(()=>{
            getAllUsers().then((apiUsers) => {
            setUsers(apiUsers.data)
            })
    });
    return(
        <div className="main-content">
            <span>Main content</span>
            {JSON.stringify(users)}
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