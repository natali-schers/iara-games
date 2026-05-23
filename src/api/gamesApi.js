import Axios from "axios";

export const gamesApi = Axios.create({
    baseURL: 'https://www.freetogame.com/api/games',
});