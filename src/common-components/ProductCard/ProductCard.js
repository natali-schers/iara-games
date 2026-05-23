import Button from "../Button/Button";
import styled from "styled-components";
import { BorderRadiuses, Colors, FontSizes, FontWeights, Spaces } from "../../shared/DesignTokens";

const Card = styled.div`
    background-color: ${Colors.NEUTRAL_WHITE};
    border-radius: ${BorderRadiuses.ONE};
    overflow: hidden;
    border: 1px solid ${Colors.NEUTRAL_GRAY};
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease-in-out;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }
`;

const Thumbnail = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
`;

const Content = styled.div`
    padding: ${Spaces.THREE};
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const CardTitle = styled.h3`
    font-size: ${FontSizes.ONE_QUARTER};
    font-weight: ${FontWeights.SEMIBOLD};
    margin-bottom: ${Spaces.TWO};
    color: ${Colors.NEUTRAL_BLACK};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Description = styled.p`
    font-size: ${FontSizes.ONE_HALF};
    color: ${Colors.NEUTRAL_DARK_GRAY};
    margin-bottom: ${Spaces.THREE};
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
`;

export function ProductCard({ game }) {
    return (
        <Card>
            <Thumbnail
                src={game.thumbnail}
                alt={game.title}
            />

            <Content>
                <CardTitle>
                    {game.title}
                </CardTitle>

                <Description>
                    {game.short_description}
                </Description>

                <Footer>
                    <Button variant="primary">
                        Ver mais
                    </Button>
                </Footer>
            </Content>
        </Card>
    );
}