import React from "react";
 import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const NavBar = () => {
    return (
        <Navbar className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/"> 
          
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" className="nav-link">
                Log-In
              </Nav.Link>
              <Nav.Link as={NavLink} to="/homepagelogin" className="nav-link">
                MyHomepage
              </Nav.Link>
              <Nav.Link as={NavLink} to="/searchUser" className="nav-link">
                Search
              </Nav.Link>
              <Nav.Link as={NavLink} to="/messenger" className="nav-link">
                Messages
              </Nav.Link>
              <Nav.Link as={NavLink} to="/updateProfile/:id" className="nav-link">
                Profile
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    };
    
export default NavBar