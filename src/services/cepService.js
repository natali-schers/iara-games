import { cepApi } from '../api/cepApi';

export const fetchAddress = async (cep) => {
    const response = await cepApi.get(`${cep}/json/`);
    return response.data;
}