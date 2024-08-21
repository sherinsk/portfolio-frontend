import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    // Simulating fetching data from an API or local JSON file
    const fetchProjects = async () => {
      // Example: Fetching from an API
      const response = await fetch('https://portfolio-backend-ebon-five.vercel.app/projects');
      const data = await response.json();

      

      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <ProjectMain>
        <h1>Projects</h1>
        <Project>
          {projects?.map((project) => (
            <List key={project.id}>
              <Imagess>
                <img src={project.image} alt="project images" />
              </Imagess>
              <p>{project.description}</p>
              {
                project.source?<Link className="link" to={project.source}>
                Source Code
              </Link>:""
              }
            </List>
          ))}
        </Project>
      </ProjectMain>
    </div>
  );
}

export default Projects;

const ProjectMain = styled.div`
  padding: 2rem;
  margin: 2rem 8rem 0;
  padding-bottom: 0;

  h1 {
    color: white;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 500;
    margin-bottom: 3rem;
  }

  @media (max-width: 1024px) {
    margin: 0 4rem 2rem;
  }
  @media (max-width: 640px) {
    margin: 0 2rem 2rem;
  }
  @media (max-width: 460px) {
    padding: 0;
  }
`;

const Project = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;
  justify-content: center;
  align-items: center;
  margin-bottom: 75px;

  @media (max-width: 1173px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 716px) {
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

  &:hover {
    transform: translateY(-7%);
  }

  .link {
    color: #f59e0b;
    text-decoration: underline;
  }
`;

const Imagess = styled.div`
  max-width: 100%;

  img {
    width: 100%;
    display: block;
    border-radius: 0.5rem;
  }
`;
