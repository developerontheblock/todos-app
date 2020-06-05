import axios from 'axios';
import { getLoggedUser } from './users.api';

export const TodoStatus = {
    Active: 'Active',
    Pending: 'Pending',
    Done: 'Done'
};

export const TodosPriority = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High'
};

const apiUrl = 'http://localhost:3005'

export async function getAllTodos(searchParam) {

    const alltodos = (await axios.get(`${apiUrl}/todos`)).data;

    if (!searchParam) {
        return alltodos;
    }

    const lowerParam = searchParam.toLowerCase();
    return alltodos.filter(Todo => Todo.title.toLowerCase().includes(lowerParam) || Todo.content.toLowerCase().includes(lowerParam));
}

export function getTodoById(id) {
    return axios.get(`${apiUrl}/todos/${id}`);
}

export async function getTodoByAuthorId(authorId, searchParam) {
    const alltodos = await getAllTodos(searchParam);
    return alltodos.filter(Todo => Todo.authorId === authorId);

}

export function getMyTodos(searchParam) {
    const loggedUserId = getLoggedUser().id;

    return getTodoByAuthorId(loggedUserId, searchParam);
}

export function saveTodo(TodoData) {
    const loggedUser = getLoggedUser();

    if (TodoData.id) {
        return axios.put(`${apiUrl}/todos/${TodoData.id}`, TodoData);
    }

    TodoData.authorId = loggedUser.id;
    TodoData.authorName = loggedUser.name;
    TodoData.date = new Date();

    if (!TodoData.status) {
        TodoData.status = TodoStatus.Active;
    }

    if (!TodoData.priority) {
        TodoData.priority = TodosPriority.Low;
    }

    return axios.post(`${apiUrl}/todos`, TodoData);
}

export function deleteTodo(id) {
    return axios.delete(`${apiUrl}/todos/${id}`);
}

export async function deleteTodoForAuthor(authorId) {
    const todos = await getTodoByAuthorId(authorId);

    todos.forEach(Todo => {
        deleteTodo(Todo.id);
    });
}