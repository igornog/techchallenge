import axios from 'axios';

export const getTasks = () =>
  axios
    .get(`/posts/`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export const createTask = ({ postContent }) =>
  axios
    .post(`/posts/`, { postContent })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export const editTask = ({ taskId, postContent }) =>
  axios
    .patch(`/posts/${taskId}`, { postContent })
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));

export const deleteTask = ({ taskId }) =>
  axios
    .delete(`/posts/${taskId}`)
    .then(({ data }) => data)
    .catch((err) => Promise.reject(err.response));
