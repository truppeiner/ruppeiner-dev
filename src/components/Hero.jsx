import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import Image from "react-bootstrap/esm/Image";

function Hero(){
    return(
    <Container className="hero-section">
    <Row className="row mt-4">
       <Col className="user-description">
            <p>I'm Thomas Ruppeiner and I'm a full stack developer based out of Austin, Texas.</p>
       </Col>
       <Col className="hero-image">
            <Image alt="hero" src="../public/assets/images/header/hero.png" className="img-fluid"></Image>
       </Col>
    </Row>
    </Container>
    )
}

export default Hero;