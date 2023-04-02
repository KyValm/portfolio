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

    return (
        <Router>
          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
              <Navbar.Brand href="">
                <div className="nav-logo">K.V.</div>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                  <a href="Kynoa_Valmonte_Resume_2023.pdf" target="_blank" rel="noopener noreferrer"className='resume-nav-bar' onClick={() => onUpdateActiveLink('resume')}>Resume
                  <FiExternalLink/>
                  </a>
                </Nav>
                <span className="navbar-text">
                  <div className="social-icon">
                    <a href="https://www.linkedin.com/in/kyvalm/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/KyValm" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
                  </div>
                  <HashLink to='#connect'>
                    <button className="vvd"><span>Lets Connect</span></button>
                  </HashLink>
                </span>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      )
    
}