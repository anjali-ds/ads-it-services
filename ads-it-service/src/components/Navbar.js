import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/LOGO/ads logo white.png'


function Navbars(props) {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
    return (
        <div>
  
    <Navbar collapseOnSelect expand="lg" bg='dark' fixed="top" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" height="60px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link > <NavLink to="/">Home</NavLink></Nav.Link>
          <Nav.Link > <NavLink to="/about">About Us</NavLink></Nav.Link>
          <Nav.Link > <NavLink to="/services">Services</NavLink></Nav.Link>
          <Nav.Link > <NavLink to="/contact">Contact Us</NavLink></Nav.Link>
           
           
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link > <NavLink to="/a">More</NavLink></Nav.Link>
          <Nav.Link > <NavLink to="/b">Else</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
}

export default Navbars;