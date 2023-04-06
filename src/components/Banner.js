import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { StarsCanvas } from './canvas';
import kyImg from '../assets/img/ky.jpg';
import 'animate.css';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ "Software Engineer","Web Developer"];
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
                  {({ isvisible }) =>
                  <div className={isvisible ?  "animate__animated animate__bounceIn" : ""}>  
                    <h1 className='text-responsive'>{'Hi I\'m Kynoa'}
                    <p className='text-responsive'>{'(Kai-noah)'}</p>  
                    <span className='txt-rotate text-responsive' dataperiod="1000" data-rotate='[ "Software Engineer","Web Developer"]'><span className="wrap">{text}</span></span>
                    </h1>
                    <p className='text-responsive' >I am eager to join a team where I can contribute my skills and grow professionally, 
                      and I strive to learn and improve every day, 
                      driven by the endless possibilities that the world of programming offers. 
                      </p>
                    <HashLink to="#connect" style={{textDecoration: 'none'}}>
                    <button><span>Connect<ArrowRightCircle size={25}/></span></button>
                    </HashLink>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                  <TrackVisibility>
                  {({ isVisible }) =>
                  <div>
                     <img className='profile' src={kyImg} alt="Header Img"/>
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