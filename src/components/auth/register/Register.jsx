import React, { Component } from 'react';
import './Register.css'
import { register } from '../../../core/api/users.api';
import { Redirect, Link } from 'react-router-dom';

export class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            age: '',
            isRegistered: false,
            errorMessage: ''
        }
    }


    onInputChange = (event) => {
        event.persist();

        this.setState({
            [event.target.name]: event.target.value,
            errorMessage: ''
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { isRegistered, ...user } = this.state;
        register(user).then(() => {
            this.setState({
                isRegistered: true
            });
        })
            .catch((err) => this.setState({ errorMessage: err.message }));
    }

    render() {
        return (
            <>
                {this.state.isRegistered && <Redirect to="/login" />}
                <div className="register-wrapper">
                    <form className="register-form" onSubmit={this.onSubmit}>
                        {this.state.errorMessage &&
                            <div className="alert alert-danger" role="alert">
                                {this.state.errorMessage}
                            </div>}
                        <div className="form-group">
                            <label labelfor="name">Name </label>
                            <input type="text" name="name" id="name" className="form-control" placeholder="Please, enter your name..." onChange={this.onInputChange} />
                        </div>
                        <div className="form-group">
                            <label labelfor="age">Age </label>
                            <input type="number" name="age" id="age" min="10" max="100" className="form-control" placeholder="Please, enter your age..." onChange={this.onInputChange} />
                        </div>
                        <div className="form-group">
                            <label labelfor="email">Email </label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Please, enter your email..." onChange={this.onInputChange} />
                        </div>
                        <div className="form-group">
                            <label labelfor="password">Password </label>
                            <input type="password" name="password" id="napasswordme" className="form-control" placeholder="Please, enter your password..." onChange={this.onInputChange} />
                        </div>
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="mt-2">Already have an account?</Link>
                    </form>
                </div>
            </>
        )
    }
}
