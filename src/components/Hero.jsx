import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImage01 from "../assets/images/header/hero.png";
import { motion } from 'framer-motion';


function Hero(){
    return(
     <motion.div
     initial={{ opacity: 0 }}
     animate={{opacity: 1 }}
     exit={{opacity: 0 }}>
    <Container className="hero-section">
    <Row className="row mt-4">
       <Col className="user-description">
            <p>I'm Thomas Ruppeiner and I'm a full stack developer based out of Austin, Texas.</p>
       </Col>
       <Col className="hero-image">
            <img alt="hero" src={heroImage01} className="img-fluid"></img>
       </Col>
    </Row>
    </Container>
    </motion.div>
    )
}

export default Hero;