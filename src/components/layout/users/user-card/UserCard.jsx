import React from 'react';
import './UserCard.css';
import { Link } from 'react-router-dom';

const cardStyle = {
    width: '15rem'
}

export function UserCard({ user }) {
    return (
        <div className="card m-2" style={cardStyle}>
            <img src={user.picture} alt={user.name} />
            <div className="card-body">
                <h5 className="card-title"><Link to={`/users/${user.id}`}>{user.name}</Link></h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Age: {user.age}</li>
                <li className="list-group-item">Email: {user.email}</li>
            </ul>
            <div className="card-body">
                <Link to={`/users/edit/${user.id}`}>Edit</Link>
            </div>
        </div>
    );
}
