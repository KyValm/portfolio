import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import project1Img from '../assets/img/spacesnip.png'
import project2Img from '../assets/img/autumn.png'
import project3Img from '../assets/img/snake.png'

const Projects = (props) => {
  const projectsData = [
    {
      title: 'Space snippets  ',
      description: 'Web app to make learning about the cosmos easy and fun.',
      img: project1Img,
      technologies: ['React + Vite', 'Node.js', 'Tailwind', 'AWS'],
      link: 'https://www.spacesnippets.com',
    },
    // Add more projects here...
    {
      title: ' Autumn\'s Image Sender',
      description: 'Service that sends random photos of my cat to your phone!',
      img: project2Img,
      technologies: ['Java', 'AWS', 'Lambda', 'TwilioAPI'],
      link: 'https://github.com/KyValm/Autumn-Cat-Image-Sender',
    },
    {
      title: ' Snake ',
      description: 'Created a simple terminal game using C',
      img: project3Img,
      technologies: ['C', 'Codeblocks'],
      link: 'https://github.com/KyValm/Snake-Game-in-C',
    }


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
                  <div className='link-project-container'>
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
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };

export default Projects;

