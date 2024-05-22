import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { useState } from 'react';

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  const handleNavLinkClick = () => {
    setMenu(false); 
  };

  return (
    <NavbarContainer>
      <Title>Portfolio</Title>
      <NavList className={menu ? 'menulist' : ''} >
        <NavItem>
          <StyledNavLink to="/" onClick={handleNavLinkClick}>Home</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/about" onClick={handleNavLinkClick}>About</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/projects" onClick={handleNavLinkClick}>Projects</StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/contact" onClick={handleNavLinkClick}>Contact</StyledNavLink>
        </NavItem>
      </NavList>
      <div className='menubar' onClick={handleClick}>
        {menu ? <MdClose /> : <HiMenu />}
      </div>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 8rem 2rem 8rem;
  font-family: sans-serif;

  @media(max-width:1024px){
    margin:0 4rem 2rem;
  }
  @media(max-width:640px){
    margin:0 2rem 2rem;
  }
  @media(max-width:460px){
    padding: 2rem 0;
  }

  .menubar {
    color: #f59e0b;
    cursor: pointer;
    font-size: 35px;
    display: none;
    
    @media(max-width:768px){
      display: block;
    }
  }
`;

const Title = styled.h1`
  color: #f59e0b;
  font-weight: 800;
  font-size: 1.875rem;
  cursor:pointer;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  opacity: 1;
  height: auto;
  overflow: hidden;

  &.menulist {
    background-color: black;
    display: block;
    position: absolute;
    top: 122px;
    width: 100%;
    left:0;
    right:0;
    padding: 0 4rem 2rem;
    opacity: 1;
    height: auto;
  }

  @media(max-width:768px){
    display: none;
    opacity: 0;
    height: 0;
    &.menulist {
      display: block;
      opacity: 1;
      height: auto;
    }
  }
`;

const NavItem = styled.li`
  color: white;
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-color 0.3s;
  padding: 10px 0;
  & .active {
    color: #f59e0b;
  }
  &:hover {
    color: #f59e0b;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  &.active {
    color: #f59e0b;
  }
`;
