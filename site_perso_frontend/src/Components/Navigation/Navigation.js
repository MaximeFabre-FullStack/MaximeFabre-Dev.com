import React, { Component } from "react";

import "./Navigation.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="white" className="navbar" fixed="top">
          {/* TODO Ajouter un logo une fois les couleurs du site definies */}
          {/* <img src="./assets/logo.png" className="logo-titre" alt="logo" /> */}

          <Navbar.Brand href="/home">
            <h1 className="title">Maxime Fabre Web Developer</h1>
            <h1 className="title-short">
              Maxime Fabre
              <br />
              Web Developer
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home" className="nav-links effect">
                <p>Home</p>
              </Nav.Link>
              <Nav.Link href="/resume" className="nav-links effect">
                <p>Resume</p>
              </Nav.Link>
              <Nav.Link href="/projects" className="nav-links effect">
                <p>Projects</p>
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/in/maxime-fabre-developer/"
                target="_blank"
                className="nav-links effect"
              >
                <p>LinkedIn</p>
              </Nav.Link>
              <Nav.Link
                href="https://github.com/MaximeFabre-FullStack"
                target="_blank"
                className="nav-links effect"
              >
                <p>GitHub</p>
              </Nav.Link>
              <Nav.Link
                href="https://leetcode.com/maxdev1993/"
                target="_blank"
                className="nav-links effect"
              >
                <p>LeetCode</p>
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-links effect">
                <p>Contact</p>
              </Nav.Link>
              <NavDropdown
                title="Settings"
                id="basic-nav-dropdown"
                className="nav-links effect"
              >
                <NavDropdown.Item href="/accueil">
                  <img
                    className="frenchflag"
                    src="./assets/frenchflag.jpeg"
                    alt="flag"
                  />
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
