import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function Header({ pageChange }){
    return(
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand href="#hero" className="navbar-title" onClick={ () => pageChange('Hero')}>Ruppeiner Development</Navbar.Brand>
            </Container>
            <Container className="header-center">
            </Container>
            <Container className="header-right">
                <Nav.Link href="#about" className="link" onClick={ () => pageChange('About')}>About</Nav.Link>
                <Nav.Link href="#projects" className="link" onClick={ () => pageChange('Projects')}>Projects</Nav.Link>
                <Nav.Link href="https://github.com/truppeiner" className="link">GitHub</Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/thomas-ruppeiner-201880170/" className="link">Resume</Nav.Link>
            </Container>
        </Navbar>
    )
}

export default Header