import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.4:3333', //verificar se é atualizado
    //emulador: 'http://localhost:3333',
});

export default api;
 