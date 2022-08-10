import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navBar.css';
import './basic.css'

export default function NavbarComp() {
  return (
    <Navbar className='navBar' expand="lg">
    <Container>
      <Navbar.Brand>4WeWiOver</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Vakken" id="basic-nav-dropdown">
            <NavDropdown.Item href="">Biologie</NavDropdown.Item>
            <NavDropdown.Item href="">Chemie</NavDropdown.Item>
            <NavDropdown.Item href="">Fysica</NavDropdown.Item>
            <NavDropdown.Item href="">Wiskunde</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="">Nederlands</NavDropdown.Item>
            <NavDropdown.Item href="">Frans</NavDropdown.Item>
            <NavDropdown.Item href="">Engels</NavDropdown.Item>
            <NavDropdown.Item href="">Duits</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="">Godsdienst</NavDropdown.Item>
            <NavDropdown.Item href="">Geschiedenis</NavDropdown.Item>
            <NavDropdown.Item href="">Aardrijkskunde</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
