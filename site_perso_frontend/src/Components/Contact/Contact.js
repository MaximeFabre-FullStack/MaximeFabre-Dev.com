import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./Contact.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Navigation />

        <div className="lang-link-contact">
          <Link to="/contact/fr">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  Cliquez ici pour afficher la version française !
                </Tooltip>
              }
            >
              <img
                src="/assets/frenchflag.jpeg"
                alt="flag"
                className="switch-flag"
              />
            </OverlayTrigger>
          </Link>
        </div>

        <div className="header-contact">
          <div className="header-h1-contact">
            <h1>Contact</h1>
          </div>
        </div>

        <p>contact me</p>

        <Footer />
      </div>
    );
  }
}

export default Contact;
