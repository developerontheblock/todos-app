import React, { Component } from 'react';
import './Register.css'

export class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            age: ''
        }
    }


    onInputChange = (event) => {
        event.persist();

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            <div className="register-wrapper">
                <form className="register-form">
                    <div className="form-group">
                        <label labelFor="name">Name: </label>
                        <input type="text" name="name" id="name" className="form-control" onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <label labelFor="age">Age: </label>
                        <input type="number" name="age" id="age" className="form-control" onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <label labelFor="email">Email: </label>
                        <input type="email" name="email" id="email" className="form-control" onChange={this.onInputChange} />
                    </div>
                    <div className="form-group">
                        <label labelFor="password">Password: </label>
                        <input type="password" name="password" id="napasswordme" className="form-control" onChange={this.onInputChange} />
                    </div>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
        )
    }
}
