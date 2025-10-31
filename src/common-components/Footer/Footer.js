import styled from 'styled-components';
import { Colors, FontColors, FontSizes } from '../../shared/DesignTokens';

const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    padding: 3rem;
    border-top: 1px solid ${Colors.NEUTRAL_GRAY};

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;

const FooterLink = styled.a`
    color: ${FontColors.PRIMARY};
    text-decoration: none;  
    font-size: ${FontSizes.ONE_QUARTER};
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid ${Colors.YELLOW};
    }
`;

const Copyright = styled.p`
    text-align: center;
    font-size: ${FontSizes.ONE_HALF};
    margin: 0;
    padding: 1rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    background-color: ${Colors.BLUE};
    color: ${Colors.NEUTRAL_WHITE};
`;

const Footer = () => {
    return (
        <footer>
            <LinksContainer>
                <FooterLink href="/termos">Termos de Uso</FooterLink>
                <FooterLink href="/privacidade">Política de Privacidade</FooterLink>
                <FooterLink href="/sobre">Sobre a Iara Games</FooterLink>
            </LinksContainer>
            <Copyright>
                © Iara Games 2025 - Todos os direitos reservados
            </Copyright>
        </footer>
    );
};

export default Footer;