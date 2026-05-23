import Button from "../common-components/Button/Button";
import { ProductCard } from "../common-components/ProductCard/ProductCard";
import { fetchGames } from "../services/gamesService";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Spaces } from "../shared/DesignTokens";

export function Home() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGamesData = async () => {
            const gamesData = await fetchGames();

            setGames(gamesData.slice(0, 8));
        };

        fetchGamesData();
    }, []);

    return (
        <div>
            <h1>Jogos em Destaque</h1>

            <GameList>
                {games.map(game => (
                    <ProductCard key={game.id} game={game} />
                ))}
            </GameList>

            <ButtonContainer>
                <Button variant="secondary">
                    Ver todos os jogos
                </Button>
            </ButtonContainer>
        </div>
    );
}

const GameList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: ${Spaces.THREE};
    margin-top: ${Spaces.TWO};
`;

const ButtonContainer = styled.div`
    margin-top: ${Spaces.THREE};
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
`;