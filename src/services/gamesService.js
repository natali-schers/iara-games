import { gamesApi } from "../api/gamesApi";

export const fetchGames = async () => {
    const response = await gamesApi.get();
    return response.data;
}