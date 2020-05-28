import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';

const noteCardStyle =
{
    maxWidth: '18rem'
}

const deleteBtnStyles =
{
    cursor: 'pointer'
}

export function NoteCard({ note, onDeleteClick }) {

    const loggedUser = getLoggedUser();
    return (
        <div className="card border-info mb-3 mb-2 ml-4 mt-2" style={noteCardStyle}>
            <div className="card-header bg-transparent border-info text-info"> <h5 className="card-title">{note.title}</h5></div>
            <div className="card-body">
                <p className="card-text">{note.content}</p>
            </div>
            <div className="card-footer bg-transparent border-info">
                <div>
                    Author: {note.authorName}
                </div>
                <div>
                    Created on: {note.date}
                </div>
            </div>
            <div className="card-footer bg-transparent border-info">
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link className="cursor-pointer btn btn-success mr-1 " to={`/notes/edit/${note.id}`}>Edit </Link>}
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className="cursor-pointer btn btn-danger " style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}>Delete</span>}
            </div>
        </div>
    );
}