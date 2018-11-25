import axios from 'axios';

let baseURL;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3000';
} else {
  baseURL = 'https://todo-boi.herokuapp.com/';
}

const Api = (token) => {
  if (typeof token !== 'undefined') {
    return axios.create({ baseURL, headers: { 'x-auth': token, Origin: 'http://localhost:8080' } });
  }

  return axios.create({ baseURL });
};


// Todo endpoints
const fetchAllTodos = (token) => { Api(token).get('todos'); };

const fetchTodoById = (token, id) => { Api(token).get(`todos/${id}`); };

const postTodos = (token, text) => { Api(token).post('todos', { text }); };

const updateTodos = (token, id, text, completed) => { Api(token).patch(`todos/${id}`, { text, completed }); };

const deleteTodo = (token, id) => { Api(token).patch(`todos/${id}`); };


// User endpoints
const fetchUser = (token) => { Api(token).get('users/me'); };

const createUser = (token) => { Api(token).get('users'); };

const loginUser = (email, password) => Api().post('users/login', { email, password });

const logoutUser = (token) => { Api(token).delete('users/me/token'); };

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
