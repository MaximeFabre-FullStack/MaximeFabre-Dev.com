import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./Projects.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Navigation />

        <div className="lang-link-project">
          <Link to="/projets">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  Click here to see the english version !
                </Tooltip>
              }
            >
              <img
                src="/assets/frenchflag.jpeg"
                alt="flag"
                className="switch-flagFR"
              />
            </OverlayTrigger>
          </Link>
        </div>

        <div className="header-top-projects">
          <div className="header-h1-projects">
            <h1>Projects</h1>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Projects;
