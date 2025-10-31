import { Flex } from "reflexbox";
import styled from "styled-components";
import { BorderRadiuses, Colors, FontColors, FontFamilies, FontSizes } from "../../shared/DesignTokens";

const Input = styled.input`
    border-radius: ${BorderRadiuses.ONE};
    border: 1px solid ${Colors.NEUTRAL_GRAY};
    padding: 4px 8px;
    height: 36px;
    width: 100%;

    &::placeholder {
        color: ${FontColors.SECONDARY};
    }
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-family: ${FontFamilies.PRIMARY};
  font-size: ${FontSizes.ONE_QUARTER};
  color: ${FontColors.PRIMARY};
`;

export function InputText(props) {
    return (
        <Flex flexDirection="column" alignItems="flex-start">
            <Label htmlFor={props.id}>{props.label}</Label>
            <Input {...props} />
        </Flex>
    );
}