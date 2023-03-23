import axios from "axios";

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

export const api = {
  getOneUser: async () => {
    let response = await http.get('/users');
    return response.data;
  },
  addNewUsers: async (name: string, email: string, password: string) => {
    let response = await http.post('/users')
  }
}