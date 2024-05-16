import React from 'react';
import styled from 'styled-components';
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
                        Passionate Frontend Developer with a knack for creating intuitive  and
                        high-performing web applications.
                    </Paragraph>
                    <Buttans>
                        <Link className='link' to ='/contact'>Contact Me</Link>
                        <Link className='link' to='/krishnapriya.pdf' download target='_blank'>Download CV</Link>
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

  @media(max-width:1024px){
    margin:0 4rem 2rem;
    padding:0;
  }
  @media(max-width:768px){
    align-items: centre;
    flex-direction: column-reverse;
  }
  @media(max-width:640px){
    margin:0 2rem 2rem;
  }
  @media(max-width:460px){
   padding:0;
  }
`;

const HomeContainer = styled.div`
  font-family: sans-serif;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: baseline;

  @media(max-width:768px){
    align-items: center;
    margin-top: 62px;
  }
`;

const Title = styled.h6`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
 
  @media(max-width:768px){
    font-size: 2rem;
  }
  @media(max-width:640px){

  }
`;

const MainTitle = styled.div`
   h1 {
    font-size: clamp(1.3rem, 4vw ,2.3rem);
    color: #f59e0b;
    margin: 0;
    font-weight: 600;
    letter-spacing: rem;

    @media(max-width:1400px){
      font-size: clamp(1.3rem, 4vw ,2.3rem);
    }
    @media(max-width:1024px)
    {
      font-size: clamp(1rem, 3vw ,2.3rem);
    }
    @media(max-width:768px){
      font-size: clamp(2rem, 4vw ,3.3rem);
    }
    @media(max-width:480px){
        font-size: clamp(1.7rem, 4vw ,3.3rem);
    }
 
}
  .highlight {
    color: white;
  }
`;

const SubTitle = styled.h1`//name
  color: #fff;
  font-size: clamp(2.25rem, 4vw, 3.5rem);
  letter-spacing: 0.1rem;
  font-weight: 600;
  white-space:nowrap;

  @media(max-width:1400px){
    font-size: clamp(2rem, 4vw, 2.5rem);
  }
  @media(max-width:1024px){
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
  @media(max-width:768px){
    font-size: clamp(2.5rem, 4vw, 2.5rem);

  }
  @media(max-width:480px){
    font-size: clamp(2rem, 4vw ,3.3rem);
}

`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 1.125rem;
  max-width:78%;
  @media(max-width:768px){
    text-align: center;
    font-size: 1.4rem;
    max-width:0;
    max-width: none;
   
  }
  @media(max-width:640px){
    font-size:1.2rem;
   }
`;

const AnimatedImage = styled.div`
  max-width: 35%;
  height: auto;
  box-shadow: 0 9px 0 #f59e0b;
  border-radius: 16rem;
  padding: 0.5rem;

 @media(max-width:1400px){
  max-width: 45%;
 }
 @media(max-width:768px){
  max-width:80%;
 }
 @media(max-width:640px){
    max-width:80%;
 }


  img {
    border-radius: 20rem;
    display: block;
    width: 100%;
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
    white-space:nowrap;
   
    @media(max-width:768px){
        font-size:1.4rem;
    }
    @media(max-width:640px){
        font-size: 1.2rem;
    }
   
  }

`;
