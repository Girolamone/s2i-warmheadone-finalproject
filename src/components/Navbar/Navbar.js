import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="navbar">
      <Container fluid> {}
        <BootstrapNavbar.Brand as={Link} to="/">WARMHEAD ONE</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="custom-navbar-nav" />
        <BootstrapNavbar.Collapse id="custom-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <NavDropdown title="WIKI" id="charts-nav-dropdown">
              <NavDropdown.Item as={Link} to="/TemperaturePage">Temperature</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/MethanePage">Methane</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CO2Page">CO2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/NO2Page">NO2</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ArcticPage">G.S.I.</NavDropdown.Item>
                         
            </NavDropdown>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default CustomNavbar;