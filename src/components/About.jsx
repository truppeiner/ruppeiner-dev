import React from "react";
import { motion } from 'framer-motion';
import {Row, Col, Container} from "react-bootstrap"
import { BsGithub, BsAward } from "react-icons/bs"
import "../css/About.css"

function About() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{opacity: 1 }}
        exit={{opacity: 0 }}>
        <Container id="about">
            <div className="headers-container">
                <div className="header-1 d-flex m-1">
                    <h5>Get To Know</h5>
                </div>
                <div className="header-2 d-flex m-1">
                    <h2>About Me</h2>
                </div>
            </div>
            <Row>
                <Col>
                <p>test</p>
                </Col>
                <Col>
                    <Row>
                        <Col className="experience-card m-2">
                            <div>
                                <div className="d-flex icon-container m-2">
                                    <BsAward className="award-icon"/>
                                </div>
                                <div>
                                    <h5 className="experience-title">Experience:</h5>
                                </div>
                            </div>
                            <div className="experience-body">
                                6 month bootcamp plus work on open source projects!
                            </div>
                        
                        </Col>
                        <Col className="github-card m-2">
                            <div>
                                <div className="d-flex icon-container m-2">
                                    <BsGithub className="github-icon"/>
                                </div>
                                <div>
                                    <h5 className="github-title">GitHub:</h5>
                                </div>
                            </div>
                            <div className="github-body">
                                40+ repositories and coloborations with other developers!
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="about-card m-2">
                        <h5>About Me:</h5>
                            <p>
                                I am a structure oriented full stack web developer with a knack for delivering modern, user-friendly designs. With a background in History and construction, I utilize critical thinking with hard work and attention to detail, in order to provide the best product, as well as communicate with a team.
                            </p>
                        <div>
                            <a href ="#contact" className="btn btn-primary contact-button">Let's Talk</a>
                        </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </motion.div>
    )
}

export default About;