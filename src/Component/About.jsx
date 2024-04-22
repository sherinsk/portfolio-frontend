import React from 'react';
import styled from 'styled-components';
import image from './Assets/pro.jpeg';

function About() {
  return (
    <AboutMe>
      <h1>About Me</h1>
      <AboutMain>
        <Image>
          <img src={image} alt='' className='about' />
        </Image>
        <Paragraph>
        <Para>I am an experienced Frontend Developer with over a decade of professional expertise in the field. 
          Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their
           success and growth.
        </Para>
        <Para>
           My passion for frontend development is not only reflected in my extensive experience but also in the 
           enthusiasm and dedication I bring to each project
        </Para>
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
gap: 76px
`;

const Image = styled.div`
  max-width:30%; 
  .about{
    width:100%;
    display:block;
    border-radius:9rem;
    box-shadow: 0 0 30px ;

  }
`;
const Paragraph = styled.div``;
const Para = styled.div`
  color:white;
  color: white;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  margin-bottom:18px;
   
`;
const SkillSets = styled.div`{
 color:white;
}`;
const Skill = styled.div`
  display:flex;
  
  color:white;
  margin-bottom:12px;
 h6{
  min-width:20%;
 }
  .html{
    background:#f59e0b;
    width:83%;
  }
  .css{
    background:#f59e0b;
    width:40%;
  }
  .tailwind{
    background:#f59e0b;
    width:20%;
  }
  .react{
    background:#f59e0b;
    width:60%;
  }
  
`;



