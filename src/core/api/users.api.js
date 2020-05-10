import axios from  'axios';

const apiUrl = 'http://localhost:3005';

export function getAllUsers() {
    return axios.get(`${apiUrl}/users`);
}