import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

api.interceptors.response.use(
  (response) => {
    if (response.data) {
      return response.data;
    }
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default {
  getBooks: (query) => api.get(`/volumes?q=${query}`).then((res) => res.items),
  getCategories: () => api.get(),
  getBookById: (bookId) => api.get(`/volumes/${bookId}`),
};
