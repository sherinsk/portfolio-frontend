import React from 'react';
import styled from 'styled-components';
import image from './Assets/pro.jpeg'
import pro from './Assets/WhatsApp Image 2024-04-18 at 1.57.13 PM (1).jpeg'
function About() {
  return (
    <AboutMe>
      <h1>About Me</h1>
      <AboutMain>
        <Image>
          <img src={pro} alt='' className='about' />
        </Image>
        <Paragraph>
          <Scentace>
          <Para>I am an experienced Frontend Developer with over a decade of professional expertise in the field. 
          Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their
           success and growth.
        </Para>
        <Para>
           My passion for frontend development is not only reflected in my extensive experience but also in the 
           enthusiasm and dedication I bring to each project
        </Para>
          </Scentace>
       
        <SkillSets>
          <Skill >
            <h6>HTML</h6>
           
           <div className='html'></div>
          </Skill>
          <Skill >
            <h6>CSS</h6>
            <div className='css'></div>
          </Skill>
          <Skill >
            <h6>TailwindCSS</h6>
            <div className='tailwind'></div>
          </Skill>
          <Skill >
            <h6>ReactJS</h6>
            <div className='react'></div>
          </Skill>
        </SkillSets>
        </Paragraph>
      </AboutMain>
      
    </AboutMe>
  );
}

export default About;

const AboutMe = styled.div`
padding: 2rem;
margin: 2rem 8rem 0 ;
h1{
  color:white;
  font-size:2.5rem;
  text-align: center;
  font-weight:500;
  margin-bottom: 3rem;
}
  
`;

const AboutMain = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 76px;
margin-bottom: 75px;
`;

const Image = styled.div`
  max-width:30%; 
  .about{
    width:100%;
    display:block;
    border-radius: 14rem;
    box-shadow: 0 0 30px #f59e0b;
    
}




  
`;
const Paragraph = styled.div``;
const Para = styled.div`
  color:white;
  color: white;
  font-size: 1.125rem;
  margin-bottom:18px;
   
`;
const Scentace = styled.div`
margin-bottom:70px;
`;
const SkillSets = styled.div`{
  margin-top:30px;
 color:white;
}`;
const Skill = styled.div`
  display:flex;
  align-items: center;
  color:white;
  margin-bottom:12px;
 h6{
  min-width:20%;
 }
  .html{
    background:#f59e0b;
    width:83%;
    height: 8px;
    border-radius: 2rem;
  }
  .css{
    background:#f59e0b;
    width:40%;
    height: 8px;
    border-radius: 2rem;
  }
  .tailwind{
    background:#f59e0b;
    width:20%;
    height: 8px;
    border-radius: 2rem;
  }
  .react{
    background:#f59e0b;
    width:60%;
    height: 8px;
    border-radius: 2rem;
  }
  &:hover {
    transitionX: ease-in-out 0.3s;
    transform: scale(1.1);
    color:#f59e0b;
  }
  
`;



