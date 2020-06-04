import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser, getLoggedUser } from '../../../../core/api/users.api';
import { UserCard } from '../user-card/UserCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsersFromAPI, deleteUserFromAPI } from '../../../../core/actions/user-actions';

const currentUser = getLoggedUser();

const usersListStyle = {
    flexWrap: 'wrap'
}
export function UsersList(props) {
    const dispatch = useDispatch();
    //const [users, setUsers] = useState([]);
    const users = useSelector(state => state.users);
    useEffect(() => {

        const searchParam = props.location.search.split('=')[1];
        dispatch(fetchAllUsersFromAPI());
        // getAllUsers(searchParam).then((allUsers) => {
        //     setUsers(allUsers.filter(u => u.id !== currentUser.id));
        // });
    }, [props.location.search, dispatch]);

    const onUserDelete = (id) => {
        dispatch(deleteUserFromAPI(id));
        //     deleteUser(id).then(() => {
        //         setUsers((prevState) => {
        //             return prevState.filter(u => u.id !== id);
        //         })
        //     }).catch((err) =>
        //         console.log(err));
    }

    return (
        <div className="users-list d-flex" style={usersListStyle}>
            {users.map((user) => <UserCard user={user} key={user.id} onDelete={onUserDelete} />)}
        </div>
    );
}