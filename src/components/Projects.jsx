import React from "react";
import { Container, Row, Col, Card, Nav} from "react-bootstrap";
import "../css/projects.css"

function Projects(){
    return(
        <Container class ="projects">
            <Col>
                <Row>
                <div>
                    <h1 className="project-header-span text-center m-3">Projects</h1>
                </div>    
                    <Col>
                    <Container>
                        <Nav.Link href="https://who-do-austin.herokuapp.com/login">
                        <Card >
                            <Card.Body className="who-do">
                                <h3 class="text-center mb-4">Who Do?</h3>
                                <Row>
                                <Col>
                                <h4>Technologies:</h4>
                                        <ul>
                                            <li class="m-2">
                                                Bootstrap
                                            </li>
                                            <li class="m-2">
                                                Javacsript
                                            </li>
                                            <li class="m-2">
                                                HTML
                                            </li>
                                            <li class="m-2">
                                                Server Side API's
                                            </li>
                                        </ul>
                                </Col>
                                <Col>
                                <h4>Description:</h4>
                                    <p>A platform for Austin residents to coordinate events in the community.</p>
                                </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Nav.Link>
                    </Container>
                    </Col>
                    <Col>
                    <Container>
                        <Nav.Link href="https://github.com/sacylkowski/tavern-masters">
                        <Card>
                            <Card.Body>
                                <h3 class="text-center mb-4">Tavern Masters</h3>
                                <Row>
                                    <Col>
                                        <h4>Technologies:</h4>
                                        <ul>
                                            <li class="m-2">
                                                MongoDB
                                            </li>
                                            <li class="m-2">
                                                Express.js
                                            </li>
                                            <li class="m-2">
                                                React
                                            </li>
                                            <li class="m-2">
                                                GraphQL
                                            </li>
                                            <li class="m-2">
                                                Bootstrap
                                            </li>
                                            <li class="m-2">
                                                Javacsript
                                            </li>
                                            <li class="m-2">
                                                HTML
                                            </li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <h4>Description:</h4>
                                        <p>A platform for users to create custom roleplaying campaigns, encounters that comprise these campaigns, and share these with other users.</p>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        </Nav.Link>
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

