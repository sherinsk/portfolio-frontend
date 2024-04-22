import React from 'react'
import styled from 'styled-components';
import image from './Assets/WhatsApp Image 2024-04-18 at 1.57.13 PM (1).jpeg'

function Spotlight() {
  return (
    <>
         <HomeMain>
        <HomeContainer>
          <Title>Hello,</Title>
          <MainTitle>
            <h1>I'm <span className="highlight">Krishnapriya</span></h1>
          </MainTitle>
          <SubTitle>FrontEnd Developer</SubTitle>
          <Paragraph>
            Passionate Frontend Developer with a knack for creating intuitive  and <br />
            high-performing web applications.
          </Paragraph>
        </HomeContainer>
        <Image>
          <img src={image} alt="profle image" />
        </Image>
      </HomeMain>
    </>
  )
}

export default Spotlight

const HomeMain = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  padding: 2rem;
  margin: 2rem 8rem 0;

`;
const HomeContainer = styled.div`
  
  font-family: sans-serif;

`;

const Title = styled.h6`
  color: #fff;
  font-size: 1.5rem; 
  margin-bottom: 1rem;
`;

const MainTitle = styled.div`
   h1 {
    font-size: 2.3rem;
    color: #f59e0b;
    margin: 0;
    font-weight:600 ;
    letter-spacing:rem
  }

  .highlight {
    color: white;
  }
`;

const SubTitle = styled.h1`
color: #fff;
font-size: 3rem;
letter-spacing: 0.1rem;
font-weight: 600;

`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 1.125rem; 
`;
const Image = styled.div`
    max-width: 35%;
    height: auto;
    box-shadow: 0 9px 0 #f59e0b;
    border-radius: 16rem;
    padding: 0.5rem;
img {
  border-radius: 20rem;
  display:block;
  width:100%;
 
}


`;

