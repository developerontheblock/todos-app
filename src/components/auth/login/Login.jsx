import React, { useState } from 'react';
import './Login.css';
import { login } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';

export function Login(props) {

    const [userData, setUserData] = useState({});
    const [isLoggedUser, setLoggedUser] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onInputChange = (event) => {
        event.persist();

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
        setErrorMessage('');
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        login(userData).then(() => {
            console.log("Successful login");
            setLoggedUser(true);
        }).catch((err) =>
            setErrorMessage(err.message));
    };

    return (
        <>
            {isLoggedUser && <Redirect to="/"></Redirect>}
            <div className="login-wrapper">
                <form className="login-form" onSubmit={onFormSubmit}>
                    {errorMessage &&
                        <div className="alert alert-danger" role="alert">
                            {errorMessage}
                        </div>}
                    <div className="form-group">
                        <label htmlFor="email">Email </label>
                        <input type="email" name="email" id="email" className="form-control" onChange={onInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input type="password" name="password" id="password" className="form-control" onChange={onInputChange} />
                    </div>
                    <button className="btn btn-info">Login</button>
                    OR
                    <div>
                        <Link to="" className="btn btn-danger mb-1 mt-2 w-50 p-2">Google</Link>
                        <Link to="" className="btn btn-primary mt-2 w-50 p-2 float-left">Facebook</Link>
                    </div>
                    <Link to="/register" className="mt-3">Don't have an account?</Link>
                </form>
            </div>
        </>
    )
}