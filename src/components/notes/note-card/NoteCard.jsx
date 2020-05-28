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


//         <div class="card border-primary mb-3" style="max-width: 18rem;">
//   <div class="card-header">Header</div>
//   <div class="card-body text-primary">
//     <h5 class="card-title">Primary card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//   </div>


        <div className="card border-primary mb-2 ml-4 mt-2" style={noteCardStyle}>
            <div className="card-header">
                {note.title}
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link className="cursor-pointer btn btn-success mr-1 mt-1" to={`/notes/edit/${note.id}`}>Edit </Link>}
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className="cursor-pointer btn btn-danger mt-1" style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}>Delete</span>}
            </div>
            <div className="card-body text-primary">
                <p className="card-text">{note.content}</p>
            </div>
            <div className="card-footer bg-transparent border-secondary">
                <div>
                    Author: {note.authorName}
                </div>
                <div>
                    Created on: {note.date}
                </div>
            </div>
        </div>
    );
}