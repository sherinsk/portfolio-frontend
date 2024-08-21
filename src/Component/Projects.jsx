import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Spinner } from "@material-tailwind/react";

function Projects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://portfolio-backend-ebon-five.vercel.app/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <ProjectMain>
        <h1>Projects</h1>
        {loading ? (
          <LoadingContainer>
            <Spinner color="white" className="h-12 w-12" />
          </LoadingContainer>
        ) : (
          <Project>
            {projects.map((project) => (
              <List key={project.id}>
                <Imagess>
                  <img src={project.image} alt="project images" />
                </Imagess>
                <p className='p-[20px]'>{project.description}</p>
                {project.source ? (
                  <Link className="link" to={project.source}>
                    Source Code
                  </Link>
                ) : null}
              </List>
            ))}
          </Project>
        )}
      </ProjectMain>
    </div>
  );
}

export default Projects;

const ProjectMain = styled.div`
  padding: 2rem;
  margin: 2rem 8rem 0;
  padding-bottom: 10rem;

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
  border-radius: 1rem;
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
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
  border-radius: 1rem 1rem 0rem 0rem;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh; /* Adjust the height to center the spinner vertically */
`;
