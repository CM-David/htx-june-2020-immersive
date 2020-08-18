import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'




const Header = () => {
    return <div>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Blogs">Blogs</Nav.Link>
      <Nav.Link href="/Puppies">Puppies</Nav.Link>
      <Nav.Link href="/AboutUs">AboutUs</Nav.Link>
      <Nav.Link href="/Contact">Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>;
};

export default Header;
