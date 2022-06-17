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
                <Nav.Link href="#Contact" className="link">Contact</Nav.Link>
                <Nav.Link href="Resume" className="link">Resume</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Header