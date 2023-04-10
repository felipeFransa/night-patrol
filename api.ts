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
    let response = await http.post('/users',{
      name, email, password
    });
    return response.data;
  }
}

const imgStart = require('./src/assets/ciclismo.png');
const imgStop = require('./src/assets/patrolStop.png');

const Users = {
  firstName: 'Felipe',
  address: 'Caicara',
  phoneNumber: '31-9171228890',
}

const dateAtual = '06/04/2023'

export const patrolNTF = [
  {local: Users.address, hora: '21:00', IMG: imgStart, text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '21:40', IMG: imgStop, text: 'Ronda Fechada!',  date: dateAtual},
  {local: Users.address, hora: '21:45', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '22:25', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '23:30', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '00:00', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '00:40', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '01:20', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '01:40', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '01:20', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '00:40', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '01:20', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '00:40', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '01:20', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '00:40', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '01:20', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
  {local: Users.address, hora: '00:40', IMG: imgStart,  text: 'Ronda Inicia!', date: dateAtual},
  {local: Users.address, hora: '01:20', IMG: imgStop, text: 'Ronda Fechada!', date: dateAtual},
]