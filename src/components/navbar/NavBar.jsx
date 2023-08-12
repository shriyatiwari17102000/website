import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import videshify from "../../images/videshify.png";
import "./navbar.css";

const NavbarComponent = () => {
  return (
    <Navbar className="nav_div" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="nav_icon_div">
          <img
            src={videshify} // Replace with your logo image URL
            width="30"
            height="30"
            // className="d-inline-block align-top"
            className="nav_img"
          />
          <p className="nav_para"> Videshify</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav_link">
              Find University
            </Nav.Link>
            <Nav.Link href="#services" className="nav_link">
              Find Counselors
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav_link">
              About
            </Nav.Link>
            <Nav.Link href="#contact" className="nav_link">
              Community
            </Nav.Link>
            <div className="border_right"></div>
            <Nav.Link href="#more" className="nav_link">
              Login
            </Nav.Link>
            <div>
              <button className="nav_btn">Get Started</button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
