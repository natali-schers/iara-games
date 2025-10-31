import notFoundImage from '../assets/images/not-found.png';
import { Flex } from '@chakra-ui/react';
import styled from 'styled-components';
import { Spaces } from '../shared/DesignTokens';

const Image = styled.img`
    max-width: 460px;
    width: 100%;
    margin: ${Spaces.FOUR} 0 ${Spaces.ONE_HALF};
    height: auto;
`;

export function NotFound() {
    return (
        <Flex flexDirection="column" alignItems="center">
            <h1>Ops... Página não encontrada!</h1>
            <p>A página que você está procurando não existe ou não pode ser acessada no momento.</p>
            <Image src={notFoundImage} alt="Página não encontrada" />

            {/* ToDo: descomentar botão após implementação da página inicial! */}
            {/* <Flex>
                <Button variant="primary" type="button" onClick={() => navigate('/')}>Ir para página inicial</Button>      
            </Flex> */}
        </Flex>
    );
}