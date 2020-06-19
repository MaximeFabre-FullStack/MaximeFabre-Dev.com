import React, { Component } from "react";
import NavigationFR from "../NavigationFR/NavigationFR";
import FooterFR from "../FooterFR/FooterFR";
import { Link } from "react-router-dom";

import "./ContactFR.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ContactFR extends Component {
  render() {
    return (
      <div className="contactFR">
        <NavigationFR />

        <div className="lang-linkFR-contact">
          <Link to="/contact">
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

        <div className="header-contactFR">
          <div className="header-h1-contactFR">
            <h1>Contact</h1>
          </div>
        </div>

        <p>Contactez moi</p>

        <FooterFR />
      </div>
    );
  }
}

export default ContactFR;
