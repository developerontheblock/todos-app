import axios from 'axios';
import { getLoggedUser } from './users.api';

const apiUrl = 'http://localhost:3005'

export async function getAllNotes(searchParam) {

    const allNotes = (await axios.get(`${apiUrl}/notes`)).data;

    if (!searchParam) {
        return allNotes;
    }

    const lowerParam = searchParam.toLowerCase();
    return allNotes.filter(note => note.title.toLowerCase().includes(lowerParam) || note.content.toLowerCase().includes(lowerParam));
}

export function getNoteById(id) {
    return axios.get(`${apiUrl}/notes/${id}`);
}

export async function getNoteByAuthorId(authorId, searchParam) {
    const allNotes = await getAllNotes(searchParam);
    return allNotes.filter(note => note.authorId === authorId);

}

export function getMyNotes(searchParam) {
    const loggedUserId = getLoggedUser().id;

    return getNoteByAuthorId(loggedUserId, searchParam);
}

export function saveNote(noteData) {
    const loggedUser = getLoggedUser();

    if (noteData.id) {
        return axios.put(`${apiUrl}/notes/${noteData.id}`, noteData);
    }

    noteData.authorId = loggedUser.id;
    noteData.authorName = loggedUser.name;
    noteData.date = new Date();

    return axios.post(`${apiUrl}/notes`, noteData);
}

export function deleteNote(id) {
    return axios.delete(`${apiUrl}/notes/${id}`);
}

export async function deleteNoteForAuthor(authorId) {
    const notes = await getNoteByAuthorId(authorId);

    notes.forEach(note => {
        deleteNote(note.id);
    });
}