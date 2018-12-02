import axios from 'axios';

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = 'https://todo-boi.herokuapp.com/';
}

const Api = () => axios.create({ baseURL });

// Todo endpoints
const fetchAllTodos = () => Api().get('todos');

const fetchTodoById = id => Api().get(`todos/${id}`);

const postTodos = text => Api().post('todos', { text });

const updateTodos = (id, text, completed) => Api().patch(`todos/${id}`, { text, completed });

const deleteTodo = id => Api().patch(`todos/${id}`);


// User endpoints
const fetchUser = () => Api().get('users/me');

const createUser = (firstName, lastName, email, password) => Api().post('users', { firstName, lastName, email, password });

const loginUser = (email, password) => Api().post('users/login', { email, password }, { withCredentials: true });

const logoutUser = () => Api().delete('users/me/token', { withCredentials: true });

export const todoApi = {
  fetchAllTodos,
  fetchTodoById,
  postTodos,
  updateTodos,
  deleteTodo,
};

export const userApi = {
  fetchUser,
  createUser,
  loginUser,
  logoutUser,
};
