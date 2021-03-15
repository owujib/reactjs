import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav>
          <Nav>
            <Link to="/about" className="nav-link">
              about
            </Link>
          </Nav>
          <Nav>
            <Link to="/posts" className="nav-link">
              posts
            </Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
