import React, { Component } from "react";

import "./NavigationFR.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" bg="white" className="navbarFR" fixed="top">
          {/* TODO Ajouter un logo une fois les couleurs du site definies */}
          {/* <img src="./assets/logo.png" className="logoFR-titre" alt="logo" /> */}

          <Navbar.Brand href="/accueil">
            <h1 className="titre">Maxime Fabre Developpeur Web</h1>
            <h1 className="titre-short">
              Maxime Fabre
              <br />
              Developpeur Web
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/accueil" className="nav-links effect">
                <p>Accueil</p>
              </Nav.Link>
              <Nav.Link href="/cv" className="nav-links effect">
                <p>CV</p>
              </Nav.Link>
              <Nav.Link href="/projets" className="nav-links effect">
                <p>Projets</p>
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
              <Nav.Link href="/contact/fr" className="nav-links effect">
                <p>Contact</p>
              </Nav.Link>
              <NavDropdown
                title="Parametres"
                id="basic-nav-dropdown"
                className="nav-links effect"
              >
                <NavDropdown.Item href="/home">
                  <img
                    className="ukflag"
                    src="./assets/ukflag.jpg"
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
