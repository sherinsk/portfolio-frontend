
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [activeLink, setActiveLink] = useState();

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <NavbarContainer>
      <Title>Portfolio</Title>
      <NavList>
        <NavItem className={activeLink === 'home' ? 'active' : ''}>
          <Link to="/" onClick={() => handleLinkClick('home')}>Home</Link>
        </NavItem>
        <NavItem className={activeLink === 'about' ? 'active' : ''}>
          <Link to="/about" onClick={() => handleLinkClick('about')}>About</Link>
        </NavItem>
        <NavItem className={activeLink === 'projects' ? 'active' : ''}>
          <Link to="/projects" onClick={() => handleLinkClick('projects')}>Projects</Link>
        </NavItem>
        <NavItem className={activeLink === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => handleLinkClick('contact')}>Contact</Link>
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
  color: white;
  border-bottom: 1px solid transparent;
  transition: color 0.3s, border-color 0.3s;

  &.active {
    color: #f59e0b;
  }

  &:hover {
    color: #f59e0b;
   
  }
`;