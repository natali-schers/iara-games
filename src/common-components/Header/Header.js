import { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.svg';
import { Colors, FontFamilies, FontSizes } from '../../shared/DesignTokens';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${Colors.BLUE};
  position: relative;
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
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${Colors.BLUE};
    padding: 0.5rem 2.5rem 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${Colors.NEUTRAL_WHITE};
  font-family: ${FontFamilies.PRIMARY};
  transition: color 0.3s ease;
  font-size: ${FontSizes.ONE_QUARTER};
  border-bottom: 2px solid transparent;
  padding: 0.5rem 0;

  &:hover {
    border-bottom: 2px solid ${Colors.YELLOW};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0;
    width: max-content;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 25px;
  height: 2px;
  background-color: ${Colors.NEUTRAL_WHITE};
  position: relative;
  transition: all 0.3s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 2px;
    background-color: ${Colors.NEUTRAL_WHITE};
    transition: all 0.3s ease;
    right: 0px;
  }

  &::before {
    transform: translateY(-8px);
  }

  &::after {
    transform: translateY(8px);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    background-color: transparent;
    
    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  `}
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Iara Games" />
      </Logo>
      <HamburgerButton onClick={toggleMenu}>
        <HamburgerIcon $isOpen={isMenuOpen} />
      </HamburgerButton>
      <Nav $isOpen={isMenuOpen}>
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