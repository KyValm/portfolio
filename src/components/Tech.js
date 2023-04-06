import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiThreedotjs
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
        <img className="tech-icons-images" src={javaImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={cppImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={cImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={jsImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={htmlImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={gitImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={awsImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img className="tech-icons-images" src={reactImg} alt="" ></img>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiThreedotjs/>
      </Col>
    </Row>
  );
};
