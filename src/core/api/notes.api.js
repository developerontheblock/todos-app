import axios from  'axios';

const apiUrl = 'http://localhost:3005'

export function getAllNotes(){
    return axios.get(`${apiUrl}/notes`);
}