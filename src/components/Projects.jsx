import React from "react";
import { Container, Row, Col, Card} from "react-bootstrap";

function Projects(){
    return(
        <Container className="projects">
            <Col>
                <Row>
                <div>
                    <h1><span className="project-header-span">__Projects__</span></h1>
                </div>    
                    <Col>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title>Who Do?</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                    </Col>
                    <Col>
                    <Container>
                        <Card>
                            <Card.Body>
                                <Card.Title>Feedback App</Card.Title>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        </Card>
                    </Container>
                    </Col>
                </Row>
                <Row>
                    <Container>
                        <Card>
                            
                        </Card>
                    </Container>
                    <Container>
                        <Card>
                            
                        </Card>
                    </Container>
                    <Container>
                        <Card>
                            
                        </Card>
                    </Container>
                </Row>
            </Col>
        </Container>
    )
}

export default Projects;

