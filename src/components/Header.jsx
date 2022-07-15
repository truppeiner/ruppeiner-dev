import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header(){
    return(
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="/" className="navbar-title">Ruppeiner Development</Navbar.Brand>
            </Container>
            <Container className="header-center">
            </Container>
            <Container className="header-right">
                <Nav.Link href="#About" className="link">About</Nav.Link>
                <Nav.Link href="#Projects" className="link">Projects</Nav.Link>
                <Nav.Link href="https://github.com/truppeiner" className="link">GitHub</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/thomas-ruppeiner-201880170/" className="link">Resume</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Header