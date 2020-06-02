import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';
import { NotesStatus, NotesPriority } from '../../../core/api/notes.api';

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

    let noteClassByStatus = "card text-white m-3 ";
    switch (note.status) {
        case NotesStatus.Active:
            noteClassByStatus += "bg-info";
            break;
        case NotesStatus.Done:
            noteClassByStatus += "bg-success";
            break;
        case NotesStatus.Pending:
            noteClassByStatus += "bg-warning";
            break;
        default:
            noteClassByStatus += "bg-info";
            break;
    }

    let noteClassByPriority = "card text-white m-3 ";
    switch (note.priority) {
        case NotesPriority.Low:
            noteClassByPriority += "bg-success";
            break;
        case NotesPriority.Medium:
            noteClassByPriority += "bg-warning";
            break;
        case NotesPriority.High:
            noteClassByPriority += "bg-danger";
            break;
        default:
            noteClassByPriority += "bg-success";
            break;
    }

    return (

        <div className={noteClassByStatus} style={noteCardStyle}>
            <div className="card-header">
                {note.title}
            </div>

            <div className="card-body">
                <p className="card-text">{note.content}</p>
            </div>
            <div className="card-footer bg-transparent border-light">
                <div>Author: {note.authorName}</div>
                <div>Created on: {note.date}</div>
            </div>
            <div className={noteClassByPriority}>
                <label>Priority</label>
            </div>
            <div className="card-footer bg-transparent border-light">
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link className="cursor-pointer btn btn-success btn-outline-light mr-2" to={`/notes/edit/${note.id}`}>Edit </Link>}
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span className="cursor-pointer btn btn-danger btn-outline-light" style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}>Delete</span>}
            </div>
        </div>
    );
}