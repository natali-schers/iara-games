import Axios from 'axios';

const cepApi = Axios.create({
    baseURL: 'https://viacep.com.br/ws/',
});