import Axios from 'axios';

export const cepApi = Axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});