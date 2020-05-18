import React from 'react';
import { useState, useEffect} from 'react';
import { getUserById, editUser } from '../../../../core/api/users.api';

export function UserEdit(props) {

    const [editedUser, setEditedUser] = useState({});

    useEffect(() => {
        getUserById(props.computedMatch.params.id).then((currentUser) => {
            setEditedUser(currentUser.data)
        });
    }, {});

    const onInputChange = (event) => {
        event.persist();

        setEditedUser((prevState)=> ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    const onFormSubmit = (event) =>{
        event.preventDefault();
        editUser(editedUser).then(() =>{
            console.log("asdasdasd");
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className="user-edit-wrapper">
            <form className="user-edit-form" onSubmit={onFormSubmit}>
                <div className="form-group">
                    <label labelfor="name">Name: </label>
                    <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} value={editedUser.name} />
                </div>
                <div className="form-group">
                    <label labelfor="age">Age: </label>
                    <input type="number" name="age" id="age" className="form-control" onChange={onInputChange} value={editedUser.age}/>
                </div>
                <div className="form-group">
                    <label labelfor="email">Email: </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={onInputChange} value={editedUser.email}/>
                </div>
                <div className="form-group">
                    <label labelfor="password">Password: </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} value={editedUser.password}/>
                </div>
                <div className="form-group">
                    <label labelfor="isActive">Is Active: </label>
                    <input type="checkbox" name="isActive" id="isActive" className="form-control" onChange={onInputChange} cheked={editedUser.isActive}/>
                </div>
                <div className="form-group">
                    <label labelfor="isAdmin">Is Admin: </label>
                    <input type="checkbox" name="isAdmin" id="isAdmin" className="form-control" onChange={onInputChange} cheked={editedUser.isAdmin} />
                </div>
                <button className="btn btn-primary">Save user</button>
            </form>
        </div>
    )
}