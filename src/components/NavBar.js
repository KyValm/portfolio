import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.png';
import { FiExternalLink } from 'react-icons/fi'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {

    const[activeLink, setActiveLink] = useState('home' , 'skills');
    const[scrolled, setScrolled] = useState(false);
    const[collapse, setCollapse] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY> 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

      const handleNavLinkClick = (value) => {
        onUpdateActiveLink(value);
        setCollapse(!collapse);
      };

    return (
        <Router>
          <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="">
                <div className="nav-logo">K.V.</div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setCollapse(!collapse)}>
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" in={!collapse}>
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavLinkClick('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavLinkClick('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavLinkClick('projects')}>Projects</Nav.Link>
                  <div className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => handleNavLinkClick('resume')}>
                    <a href="Kynoa_Valmonte_Resume_2023.pdf" target="_blank" rel="noopener noreferrer" className='resume-nav-bar'>
                        Resume
                        <FiExternalLink />
                    </a>
                  </div>
                </Nav>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/kyvalm/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/KyValm" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                  </div>
                 
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      )
    
}