import styled from "styled-components";
import { Divider } from "../common-components/Divider/Divider";
import { InputText } from "../common-components/InputText/InputText";
import { Flex, Box } from '@chakra-ui/react';
import Button from "../common-components/Button/Button";
import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 540px;
    gap: 16px;
`;

export function Register() {
    const initialState = {
        "cep": "",
        "logradouro": "",
        "complemento": "",
        "bairro": "",
        "localidade": "",
        "uf": "",
        "estado": "",
    }

    const [address, setAddress] = React.useState(initialState);

    const fetchAddress = async (cep) => {
        const cepFormatted = cep.replace(/\D/g, '');

        try {
            if (cepFormatted.length !== 8) {
                return;
            }

            const response = await axios.get(`https://viacep.com.br/ws/${cepFormatted}/json/`);
            const data = response.data;
            if (data.erro) {
                toast.error("CEP inválido!");
            }
            else{
                setAddress((prev) => ({ ...prev, ...data }));
            }

        } catch (error) {
            toast.error("Erro ao buscar o CEP. Tente novamente mais tarde.");
            setAddress(initialState);
        }
    };

    // máscara e limite de 8 dígitos para CEP
    const handleCepChange = (e) => {
        const digits = e.target.value.replace(/\D/g, '').slice(0, 8); // limita a 8 dígitos
        const masked = digits.length > 5 ? `${digits.slice(0,5)}-${digits.slice(5)}` : digits;
        setAddress(prev => ({ ...prev, cep: masked }));
    };

    const navigate = useNavigate();

    return (
        <Flex justifyContent="center" alignItems="center" flexDirection="column">
            <h1>Boas-vindas ao Iara!</h1>
            <p>Finalize seu cadastro para ter acesso a benefícios e ofertas exclusivas!</p>
            <Divider />
            <Form>
                <InputText label="Nome Completo" id="full-name" type="text" placeholder="Ex: Maria Silva" required />
                <InputText label="Data de Nascimento" id="birth-date" type="date" placeholder="Ex: 01/01/1990" required />
                <InputText label="E-mail" id="email" type="email" placeholder="Ex: maria@email.com" required />
                <InputText label="Telefone" id="phone" type="tel" placeholder="Ex: (11) 98765-4321" />
                <InputText label="Senha" id="password" type="password" placeholder="Crie uma senha segura" required />

                <hr />

                <Flex>
                    <Box pr={2} flex={1}>
                        <InputText
                            label="CEP"
                            id="cep"
                            type="text"           
                            inputMode="numeric"   
                            placeholder="Ex: 12345-678"
                            required
                            value={address.cep}
                            maxLength={9}         
                            onChange={handleCepChange}
                            onBlur={() => fetchAddress(address.cep)}
                        />
                    </Box>

                    <Box pl={2} flex={1}>
                        <InputText
                            label="UF"
                            id="state"
                            type="text"
                            placeholder="Ex: SP"
                            required
                            value={address.uf}
                            onChange={(e) => setAddress({ ...address, uf: e.target.value })}
                        />
                    </Box>
                </Flex>

                <InputText
                    label="Logradouro"
                    id="street"
                    type="text"
                    placeholder="Ex: Rua das Flores"
                    required
                    value={address.logradouro}
                    onChange={(e) => setAddress({ ...address, logradouro: e.target.value })}
                />

                <InputText
                    label="Bairro"
                    id="neighborhood"
                    type="text"
                    placeholder="Ex: Jardim das Palmeiras"
                    required
                    value={address.bairro}
                    onChange={(e) => setAddress({ ...address, bairro: e.target.value })}
                />

                <InputText
                    label="Cidade"
                    id="city"
                    type="text"
                    placeholder="Ex: São Paulo"
                    required
                    value={address.localidade}
                    onChange={(e) => setAddress({ ...address, localidade: e.target.value })}
                />

                <Flex>
                    <Box pr={2} flex={1}>
                        <InputText label="Número" id="number" type="text" placeholder="Ex: 123" required />
                    </Box>

                    <Box pl={2} flex={1}>
                        <InputText label="Complemento" id="complement" type="text" placeholder="Ex: Apto 45, Bloco B" />
                    </Box>
                </Flex>

                <hr />

                <Flex>
                    <Box pr={2} flex={1}>
                        <Button variant="secondary" type="button" onClick={() => navigate('/')}>Voltar</Button>
                    </Box>

                    <Box pl={2} flex={1}>
                        <Button variant="primary" type="submit">Finalizar Cadastro</Button>
                    </Box>
                </Flex>
            </Form>
        </Flex>
    );
}
