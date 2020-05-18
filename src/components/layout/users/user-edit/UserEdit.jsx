import React from 'react';
import { useState } from 'react';

export function UserEdit(props) {

    const [editedUser, setEditedUser] = useState({});

    const onInputChange = (event) => {
        event.persist();

        setEditedUser((prevState)=> ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    return (
        <div className="user-edit-wrapper">
            <form className="user-edit-form">
                <div className="form-group">
                    <label labelfor="name">Name: </label>
                    <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label labelfor="age">Age: </label>
                    <input type="number" name="age" id="age" className="form-control" onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label labelfor="email">Email: </label>
                    <input type="email" name="email" id="email" className="form-control" onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label labelfor="password">Password: </label>
                    <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label labelfor="isActive">Is Active: </label>
                    <input type="checkbox" name="isActive" id="isActive" className="form-control" onChange={onInputChange} />
                </div>
                <div className="form-group">
                    <label labelfor="isAdmin">Is Admin: </label>
                    <input type="checkbox" name="isAdmin" id="isAdmin" className="form-control" onChange={onInputChange} />
                </div>
                <button className="btn btn-primary">Edit</button>
            </form>
        </div>
    )
}