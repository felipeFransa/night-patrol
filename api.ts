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
type TypePatrolNTF = {
  hoursStart: string;
  hoursStop: string;
  hoursBreak: string;
  localStart: string;
  localStop: string;
  IMG: any;
  date: string;
}

const imgStart = require('./src/assets/ciclismo.png');
const imgStop = require('./src/assets/patrolStop.png');
const imgUsers = require('./src/assets/user-photo.png')

export const Users = {
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

export const PatrolNTF: TypePatrolNTF[] = [
  {localStart: 'hahha', date: '22:00', localStop: 'rua tal', hoursBreak: '11:00', hoursStart: '12:00', hoursStop: '02:00', IMG:imgStart},
]
export const UserClients = [
  {name: 'Fulana', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 2', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 3', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 4', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 5', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 6', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 7', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 8', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 9', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 10', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 11', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 12', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers},
  {name: 'Fulana 13', rua: 'Exemplo',  telefone: '31-97100-2255', casa: '320', bairro: 'caicara', IMGClient: imgUsers}
]