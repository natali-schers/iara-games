import styled from "styled-components";
import { Colors, Spaces } from "../../shared/DesignTokens";

export const Divider = styled.hr`
    border-top: 4px solid ${Colors.BLUE};
    width: 100%;
    margin: ${Spaces.TWO};
    max-width: 128px;
`;