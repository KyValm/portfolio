import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import headerImg from '../assets/img/header-img.svg';
import { StarsCanvas } from './canvas';
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer","Web Developer", "Backend Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState (300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }

    return (
        <section className="banner" id="home">  
          <Router>          
            <Container>
             <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>     
                  <TrackVisibility>        
                  {({ isVisible }) =>
                  <div className={isVisible ?  "animate__animated animate__bounceIn" : ""}>  
                    <h1>{'Hi I\'m Kynoa'}
                    <h2>{'(Kai-noah)'}</h2>  
                    <span className='txt-rotate' dataPeriod="1000" data-rotate='[ "Software Engineer","Web Developer", "Backend Software Engineer"]'><span className="wrap">{text}</span></span>
                    </h1>
                    <p>As a passionate software engineer, I find immense joy in creating applications and developing websites that bring ideas to life. While I am eager to join a team where I can contribute my skills and grow professionally, I also believe in the value of enjoying the journey. If not given the opportunity to interview, I will still be found happily coding away, honing my craft, and eagerly exploring new technologies. I strive to learn and improve every day, driven by the endless possibilities that the world of programming offers. Whether or not we end up working together, I look forward to building innovative solutions and positively impacting the world around me, one line of code at a time.</p>
                    <HashLink to="#connect" style={{textDecoration: 'none'}}>
                    <button><span>Let's Connect<ArrowRightCircle size={25}/></span></button>
                    </HashLink>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__bounceIn" : ""}>
                     <img src={headerImg} alt="Header Img"/>
                  </div>}
                  </TrackVisibility>
                </Col>
             </Row>
            </Container>
            <StarsCanvas/>
            </Router> 
        </section>
                
    )
}