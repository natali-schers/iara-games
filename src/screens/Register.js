import styled from "styled-components";
import { Divider } from "../common-components/Divider/Divider";
import { InputText } from "../common-components/InputText/InputText";
import { Box, Flex } from "reflexbox";
import Button from "../common-components/Button/Button";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 540px;
    gap: 16px;
`;

export function Register() {
    return (
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
            <h1>Boas-vindas ao Iara!</h1>
            <p>Finalize seu cadastro para ter acesso a benefícios e ofertas exclusivas!</p>
            <Divider />
            <Form>
                <InputText label="Nome Completo" id="full-name" type="text" placeholder="Ex: Maria Silva" required="true" />
                <InputText label="Data de Nascimento" id="birth-date" type="date" placeholder="Ex: 01/01/1990" required="true" />
                <InputText label="E-mail" id="email" type="email" placeholder="Ex: maria@email.com" required="true" />
                <InputText label="Telefone" id="phone" type="tel" placeholder="Ex: (11) 98765-4321" />
                <InputText label="Senha" id="password" type="password" placeholder="Crie uma senha segura" required="true" />

                <hr />

                <Flex>
                    <Box width={1 / 2} pr={2}>
                        <InputText label="CEP" id="cep" type="text" placeholder="Ex: 12345-678" required />
                    </Box>

                    <Box width={1 / 2} pl={2}>
                        <InputText label="UF" id="state" type="text" placeholder="Ex: SP" required />
                    </Box>
                </Flex>

                <InputText label="Logradouro" id="street" type="text" placeholder="Ex: Rua das Flores" required="true" />
                <InputText label="Bairro" id="neighborhood" type="text" placeholder="Ex: Jardim das Palmeiras" required="true" />
                <InputText label="Cidade" id="city" type="text" placeholder="Ex: São Paulo" required="true" />

                <Flex>
                    <Box width={1 / 2} pr={2}>
                        <InputText label="Número" id="number" type="text" placeholder="Ex: 123" required />
                    </Box>

                    <Box width={1 / 2} pl={2}>
                        <InputText label="Complemento" id="complement" type="text" placeholder="Ex: Apto 45, Bloco B" />
                    </Box>
                </Flex>

                <hr />

                <Flex>
                    <Box width={1 / 2} pr={2}>
                        <Button variant="secondary">Voltar</Button>
                    </Box>

                    <Box width={1 / 2} pl={2}>
                        <Button variant="primary">Finalizar Cadastro</Button>
                    </Box>
                </Flex>
            </Form>
        </Flex>
    );
}
