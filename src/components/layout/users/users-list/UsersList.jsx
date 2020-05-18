import React, { useState, useEffect } from 'react';
import { getAllUsers, deleteUser } from '../../../../core/api/users.api';
import { UserCard } from '../user-card/UserCard';

export function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getAllUsers().then((allUsers) => {
            setUsers(allUsers.data)
        });
    }, []);

    const onUserDelete = (id) => {
        deleteUser(id).then(() => {
            setUsers((prevState) => {
                return prevState.filter(u=> u.id !== id);
            })
        }).catch((err) =>
            console.log(err));
    }

    return (
        <div className="users-list d-flex">
            {users.map((user) => <UserCard user={user} key={user.id} onDelete={onUserDelete} />)}
        </div>
    );
}