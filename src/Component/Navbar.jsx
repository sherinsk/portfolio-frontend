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

  return (
    <NavbarContainer>
      <Title>Portfolio</Title>
      <NavList className={menu ? 'menulist' : ''}>
        <NavItem>
          <NavLink to="/" >Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about" >About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects" >Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact" >Contact</NavLink>
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
  // scroll-behavior: smooth;
 

  &.menulist {
    background-color: black;
    display: block;
    position: absolute;
    top: 122px;
    width: 94%;
    margin-left: -55px;
    padding: 0 4rem 2rem
    
  }

  @media(max-width:768px){
    display: none;
  }
`;

const NavItem = styled.li`
  color: white;
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-color 0.3s;
  padding: 10px 0;
  // scroll-behavior: smooth;

  & .active {
    color: #f59e0b;
  }
  &:hover {
    color: #f59e0b;
  }
`;
; 