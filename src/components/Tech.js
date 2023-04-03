import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiThreedotjs, SiReact
} from "react-icons/si";
import gitImg from "../assets/tech/git.png";
import  javaImg  from "../assets/tech/java.png";
import  cImg  from "../assets/tech/c.png";
import  reactImg  from "../assets/tech/reactjs.png";
import  cppImg  from "../assets/tech/Cpp.png";
import  htmlImg  from "../assets/tech/html.png";
import  jsImg  from "../assets/tech/js.png";
import  awsImg  from "../assets/tech/aws.png";

export const Tech = () => {
  return (
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} id='skills'>
      <Col xs={4} md={2} className="tech-icons">
        <img className="tech-icons-images" src={javaImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={cppImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={cImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={jsImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={htmlImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={gitImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={awsImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={reactImg}></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiThreedotjs/>
      </Col>
    </Row>
  );
};
