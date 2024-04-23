import React from 'react';
import styled, { keyframes } from 'styled-components';
import image from './Assets/WhatsApp Image 2024-04-18 at 1.57.13 PM (1).jpeg';
import { Link } from 'react-router-dom';



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
          <Buttans>
            <span className='link'><Link>Contact Me</Link></span>
            <span className='link'><Link >Download CV</Link></span>
          </Buttans>
        </HomeContainer>
        <AnimatedImage>
          <img src={image} alt="profile image" />
        </AnimatedImage>
      </HomeMain>
    </>
  );
}

export default Spotlight;

const HomeMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  margin: 2rem 8rem 0;
  margin-bottom: 75px;
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
    font-weight: 600;
    letter-spacing: rem;
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

const AnimatedImage = styled.div`
  max-width: 35%;
  height: auto;
  box-shadow: 0 9px 0 #f59e0b;
  border-radius: 16rem;
  padding: 0.5rem;
  animation: bounce 0.s infinite;
 
 


  img {
    border-radius: 20rem;
    display: block;
    width: 100%;
  }
  @keyframes bounce{
    10%{
      height:50px;
      width:50px;
    }
    30%{
      height:50px;
      width:40px;
    }
    50%{
      height:30px;
      width:57px;
      transform:translateY(240px)
    }
    80%{
      height:50px;
      width:57px
    }
    100%{
      transform:translateY(0px)
    }
  }
`;

const Buttans = styled.div`
  color: white;
  display: flex;
  gap: 30px;
  margin-top: 50px;

  .link {
    background: #f59e0b;
    border-radius: 4rem;
    padding: 10px 20px;
    cursor: pointer;
  }

  // &:hover {
  //   transition: ease-in-out 0.5s;
  //   transform: scale(1.1);
  // }
`;
