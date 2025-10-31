import styled, { css } from 'styled-components';
import { Colors, FontSizes, BorderRadiuses } from '../../shared/DesignTokens';

const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  ${({ variant }) => variant === 'primary' && css`
    background-color: ${Colors.BLUE};
    color: white;
    width: 100%;
    font-size: ${FontSizes.ONE_QUARTER};
    height: 36px;
    border-radius: ${BorderRadiuses.ONE};

    &:hover {
      opacity: 0.8;
    }
  `}

  ${({ variant }) => variant === 'secondary' && css`
    background-color: #FFFFFF;
    border: 1px solid ${Colors.BLUE};
    color: ${Colors.BLUE};
    width: 100%;
    font-size: ${FontSizes.ONE_QUARTER};
    height: 36px;    
    border-radius: ${BorderRadiuses.ONE};

    &:hover {
        color: ${Colors.BLUE};
        background-color: ${Colors.BLUE_OPACITY};
    }
  `}
`;

const Button = ({ variant = 'primary', children, ...props }) => {
    return (
        <ButtonStyled variant={variant} {...props}>
            {children}
        </ButtonStyled>
    );
};

export default Button;