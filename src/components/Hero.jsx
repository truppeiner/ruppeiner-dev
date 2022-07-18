import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Hero(){
    return(
    <Container className="hero-section">
    <Row className="row mt-4">
       <Col className="user-description">
            <p>I'm Thomas Ruppeiner and I'm a full stack developer based out of Austin, Texas.</p>
       </Col>
       <Col className="hero-image">
            <img alt="hero" src="../assets/images/header/hero.png" className="img-fluid"></img>
       </Col>
    </Row>
    </Container>
    )
}

export default Hero;