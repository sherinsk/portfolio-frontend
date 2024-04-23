import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>My Portfolio</FooterLogo>
        <FooterLinks>
          <FooterLink href="#">Home</FooterLink>
          <FooterLink href="#">Projects</FooterLink>
          <FooterLink href="#">About</FooterLink>
          <FooterLink href="#">Contact</FooterLink>
        </FooterLinks>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`

  color: #fff;
  padding: 2rem 0;
  border-top: 1px solid #f59e0b;
}


`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:  0 2rem;
margin: 0 8rem 0;
`;

const FooterLogo = styled.h2`
  font-size: 1.5rem;
  color:#f59e0b;
  font-weight"600;
`;

const FooterLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f59e0b;
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  margin-top: 1rem;
`;
