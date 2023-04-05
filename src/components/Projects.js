import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import project1Img from '../assets/img/spacesnip.png'

const Projects = (props) => {
  const projectsData = [
    {
      title: 'Space snippets',
      description: 'Web app to make learning about the cosmos easy and fun.',
      img: project1Img,
      technologies: ['React + Vite', 'Node.js', 'Tailwind', 'AWS'],
      link: 'https://www.spacesnippets.com',
    }
    // Add more projects here...
  ];

  return (
      <Container id='projects'>
        <h2 className="projects-header">Projects</h2>
        <Row>
          {projectsData.map((project, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-4">
              <div className="project-card">
                <div
                  className="project-image"
                  style={{ backgroundImage: `url(${project.img})` }}
                ></div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-technologies">
                    {project.technologies.join(', ')}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default Projects;

