import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../css/Resume.css";
import resumeImg from "../assets/images/resume/resume-display.png";
import { motion } from 'framer-motion';

function Resume () {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}>
       <Container className="mt-5">
            <Row>
                <Col>
                    <div className="resume-display">
                            <h1>Resume:</h1>
                            <a href='https://docdro.id/x08VhEP' className = 'resume-link'>
                                <img src={resumeImg} className = 'resume-image img-fluid p-3' alt="resume"/>
                            </a>
                    </div>
                </Col>
                <Col>
                    <div className="talents">
                        <h1 className='talent-title'>I'm skilled with:</h1>
                        <ul>
                            <li className="m-1">JavaScript</li>
                            <li className="m-1">HTML</li>
                            <li className="m-1">CSS/Bootstrap</li>
                            <li className="m-1">MERN Stack</li>
                            <li className="m-1">MongoDB</li>
                            <li className="m-1">Express.js</li>
                            <li className="m-1">React</li>
                            <li className="m-1">Node.js</li>
                            <li className="m-1">GraphQL</li>
                            <li className="m-1">MySQL</li>
                            <li className="m-1">Object-Oriented Programming</li>
                            <li className="m-1">Jest</li>
                            <li className="m-1">Agile Method</li>
                            <li className="m-1">Critical Thinking</li>
                        </ul>
                    </div>
                </Col>
            </Row>
       </Container>
       </motion.div> 
    )
};

export default Resume