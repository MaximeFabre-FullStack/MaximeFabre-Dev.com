import React, { Component } from "react";
import NavigationFR from "../NavigationFR/NavigationFR";
import FooterFR from "../FooterFR/FooterFR";
import { Link } from "react-router-dom";

import "./ProjetFR.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjetFR extends Component {
  render() {
    return (
      <div className="projets">
        <NavigationFR />

        <div className="lang-linkFR-projet">
          <Link to="/projects">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  Click here to see the english version !
                </Tooltip>
              }
            >
              <img
                src="/assets/ukflag.jpg"
                alt="flag"
                className="switch-flagFR"
              />
            </OverlayTrigger>
          </Link>
        </div>

        <div className="header-top-projets">
          <div className="header-h1-projets">
            <h1>Projets</h1>
          </div>
        </div>

        <div className="coucou">
          <p>projet coucou</p>
        </div>

        <FooterFR />
      </div>
    );
  }
}

export default ProjetFR;
