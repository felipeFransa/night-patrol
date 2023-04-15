import axios from "axios";
import { AuthData } from './src/context/Auth';

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
const imgUsers = require('./src/assets/user-photo.png')

export const Users = {
  firstName: 'Felipe',
  address: 'Caicara',
  phoneNumber: '31-9171228890',
}
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
];

const login = (email: string, password: string): Promise<AuthData> => {

  return new Promise((resolve, reject)=>{

    setTimeout(() => {
      if(password === '12345'){
        resolve({
          token: 'fake-token',
          email,
          name: 'Felipe'
        })
      }else{
        reject(new Error('credencias iválidas'))
      }
    }
  , 5000);
})
}

export const authService = {login}