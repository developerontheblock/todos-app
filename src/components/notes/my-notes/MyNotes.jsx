import React from 'react';
import { useState } from 'react';
import { NoteCard } from '../note-card/NoteCard';
import { useEffect } from 'react';
import { getMyNotes } from '../../../core/api/notes.api';


const myNotesListStyle = {
    margin: '5px',
    flexWrap: 'wrap'
}

export function MyNotes(props) {

    const [userNotes, setUserNotes] = useState([]);

    useEffect(() => {
        const searchParam = props.location.search.split('=')[1];
        getMyNotes(searchParam).then((notes) => {
            setUserNotes(notes);
        });
    }, [props.location.search]);

    return (
        <div className="my-notes-wrapper d-flex" style={myNotesListStyle}>
            {userNotes.map(note => <NoteCard note={note} key={note.id} />)}
        </div>
    )
}