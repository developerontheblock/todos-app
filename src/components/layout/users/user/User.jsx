import React, { Component } from 'react';
import { getUserById } from '../../../../core/api/users.api';
import { getNoteByAuthorId, deleteNote } from '../../../../core/api/notes.api';
import { UserCard } from '../user-card/UserCard';
import { NoteCard } from '../../../notes/note-card/NoteCard';

export class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {},
            notes: []
        }
    }

    componentDidMount() {
        const authorId = this.props.computedMatch.params.id;

        getUserById(authorId).then((response) => {
            this.setState({
                user: response.data
            });
        });

        getNoteByAuthorId(authorId).then((userNotes) => {
            this.setState({
                notes: userNotes
            });
        });
    }

    onDelete = (id) => {
        deleteNote(id).then(() => {
            const allNotes = this.state.notes;
            const newNotes = allNotes.filter(note => note.id !== id);
            this.setState({
                notes: newNotes
            });
        })
    };

    render() {
        return (
            <div className="single-user">
                <UserCard user={this.state.user} />
                {this.state.notes.map(note => < NoteCard note={note} key={note.id} onDeleteClick={this.onDelete} />)}
            </div>
        )
    }
}
