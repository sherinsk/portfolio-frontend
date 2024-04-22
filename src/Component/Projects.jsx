import React from 'react'
import styled from 'styled-components'
import illa from './Assets/illa spices.png'
import great from './Assets/great.png'
import highrangevalley from './Assets/highrangevalley.png'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div>
      <ProjectMain>
        <h1>Projects</h1>
        <Project>
          <List id='list'>
            <Imagess><img src={illa} alt='illa spices images' /></Imagess>
            <p>Illa Spices is a static website built using HTML,
              CSS, and JavaScript.</p>
            <Link className='link'>Learn More</Link>
          </List>
          <List>
            <Imagess><img src={great} alt='illa spices images' /></Imagess>
            <p>Great Explore is a static website built using HTML,
              CSS, and JavaScript.</p>
            <Link className='link'>Learn More</Link>
          </List>
          <List>
            <Imagess><img src={highrangevalley} alt='illa spices images' /></Imagess>
            <p>Highrange Valley is a static website built using HTML,
              CSS, and JavaScript.</p>
            <Link className='link'>Learn More</Link>
          </List>
          <List>
            <Imagess><img src={illa} alt='illa spices images' /></Imagess>
            <p>"Illa Spices is a static website built using HTML,
              CSS, and JavaScript,"</p>
            <Link className='link'>Learn More</Link>
          </List>
          <List>
            <Imagess><img src={great} alt='illa spices images' /></Imagess>
            <p>Illa Spices is a static website built using HTML,
              CSS, and JavaScript.</p>
            <Link className='link'>Learn More</Link>
          </List>
          <List>
            <Imagess><img src={highrangevalley} alt='illa spices images' /></Imagess>
            <p>Illa Spices is a static website built using HTML,
              CSS, and JavaScript.</p>
            <Link className='link'>Learn More</Link>
          </List>
        </Project>
      </ProjectMain>
    </div>
  )
}

export default Projects

const ProjectMain = styled.div`
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
const Project = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap:45px;
justify-content: center;
align-items: center;
`;

const List = styled.div`
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
