import React from 'react';
import './UserCard.css'

export function UserCard({user}) {
    
    return(
        <div className="user-card">
            <div className="picture-holder">
                <img src={user.picture} alt= {user.name}/>
            </div>
            <div className="info-holder">
                <div className="name">Name: {user.name}</div>
                <div className="age">Age: {user.age}</div>
                <div className="email">Email: {user.email}</div>
            </div>
        </div>
    );

}
