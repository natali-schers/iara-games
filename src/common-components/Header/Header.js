import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { Colors, FontFamilies, FontSizes } from '../../shared/DesignTokens';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${Colors.BLUE};
`;

const Logo = styled.div`
  img {
    height: 60px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${Colors.NEUTRAL_WHITE};
  font-family: ${FontFamilies.PRIMARY};
  transition: color 0.3s ease;
  font-size: ${FontSizes.ONE_QUARTER};
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid ${Colors.YELLOW};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Iara Games" />
      </Logo>
      <Nav>
        <NavLink href="/home">Home</NavLink>
        <NavLink href="/games">Catálogo de Jogos</NavLink>
        <NavLink href="/about">Sobre o Iara Games</NavLink>
        <NavLink href="/logon">Login</NavLink>
        <NavLink href="/register">Cadastro</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;