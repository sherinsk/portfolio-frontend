import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Navbar() {
  const [selectedItem, setSelectedItem] = useState('true');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <NavbarContainer>
      <Title>Portfolio</Title>
      <NavList>
        <NavItem isSelected={selectedItem === 'home'}>
          <NavLink to="/" onClick={() => handleItemClick('home')}>Home</NavLink>
        </NavItem>
        <NavItem isSelected={selectedItem === 'about'}>
          <NavLink to="/about" onClick={() => handleItemClick('about')}>About</NavLink>
        </NavItem>
        <NavItem isSelected={selectedItem === 'projects'}>
          <NavLink to="/projects" onClick={() => handleItemClick('projects')}>Projects</NavLink>
        </NavItem>
        <NavItem isSelected={selectedItem === 'contact'}>
          <NavLink to="/contact" onClick={() => handleItemClick('contact')}>Contact</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default Navbar;


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin: 2rem 8rem 0;
  font-family: sans-serif;
`;

const Title = styled.h1`
  color: #f59e0b;
  font-weight: 800;
  font-size: 1.875rem;
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  font-size: 1.125rem;
`;

const NavItem = styled.li`
  color: ${({ isSelected }) => (isSelected ? '#f59e0b' : 'white')};
  transition: color 0.3s;
`;
