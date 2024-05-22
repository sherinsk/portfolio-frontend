import React from 'react'
import styled from 'styled-components'
import illa from './Assets/illa spices.png'
import great from './Assets/great.png'
import highrangevalley from './Assets/highrangevalley.png'
import music from './Assets/musicplayer (1).png'
import youtube from './Assets/youtube-clone (1).jpg'
import netflix from './Assets/netflix (1).jpg'
import { Link } from 'react-router-dom'


function Projects() {

  const projects = [
    {
      id: 1,
      image: illa,
      description: "Illa Spices is a static website built using HTML,CSS, and JavaScript with responsive design",
      source:"https://gitlab.com/krishnapriyasanthosh1999/illa-spices"
    },
    {
      id: 2,
      image: great,
      description: "The Great Explore  is a static website built using HTML,CSS, and JavaScript with responsive design",
      source:"https://gitlab.com/krishnapriyasanthosh1999/great-explore"
    },
    {
      id: 3,
      image: highrangevalley,
      description: "The Highrage Valley is a static website built using HTML,CSS, and JavaScript with responsive design",
      source:"https://gitlab.com/krishnapriyasanthosh1999/high-range-valley"
    },
    {
      id: 3,
      image: music,
      description: "Music Player is a dynamic website built using react js,tailwind css with responsive design",
      source:"https://gitlab.com/krishnapriyasanthosh1999/music-player"
    },
    {
      id: 4,
      image: youtube,
      description: "Youtube  is a dynamic website built using react js ,tailwind css with responsive design",
      source:"https://gitlab.com/krishnapriyasanthosh1999/youtube-clone"
    },
    {
      id: 5,
      image: netflix,
      description: " Netflix is a dynamic website built using react js ,tailwind css with responsive design",
      source:""
    },
  ]
  return (
    <div>

      <ProjectMain>
        <h1>Projects</h1>
        <Project>

          {
            projects?.map(project => (
              <List>
                <Imagess><img src={project?.image} alt='illa spices images' /></Imagess>
                <p>{project?.description}</p>
                <Link className='link' to={project?.source}>Source Code</Link>
                {/* <link>{project?.source}</link> */}
              </List>
            ))
          }
        </Project>
      </ProjectMain>

    </div>
  )
}

export default Projects

const ProjectMain = styled.div`
padding: 2rem;
margin: 2rem 8rem 0 ;
padding-bottom: 0;

h1{
  color:white;
  font-size:2.5rem;
  text-align: center;
  font-weight:500;
  margin-bottom: 3rem;
}

@media(max-width:1024px){
  margin:0 4rem 2rem;
 
}
@media(max-width:640px){
  margin:0 2rem 2rem;
}
@media(max-width:460px){
  padding:0;
 }
`;
const Project = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap:45px;
justify-content: center;
align-items: center;
margin-bottom: 75px;
@media(max-width:1173px){
  grid-template-columns: repeat(2, 1fr);
}
@media(max-width:716px){
  grid-template-columns: repeat(1, 1fr);
}
`;

const List = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    
color: white;
padding: 1.5rem;
border-radius: 4rem;
transition: ease-in-out 0.3s;
box-shadow: 0 0 20px #f59e0b;

&:hover{
  transform: translateY(-7%);
}
.link{
  color:#f59e0b;
  text-decoration: underline;
}
`;

const Imagess = styled.div`
max-width:100%;
img{
  width: 100%;
  display: block;
  border-radius: 0.5rem;
}
`;
