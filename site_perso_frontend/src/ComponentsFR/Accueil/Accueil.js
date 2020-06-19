import React, { Component } from "react";
import NavigationFR from "../NavigationFR/NavigationFR";
import FooterFR from "../FooterFR/FooterFR";
import { Link } from "react-router-dom";

import "./Accueil.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class Accueil extends Component {
  render() {
    return (
      <div className="accueil">
        <NavigationFR />

        <Link to="/home" className="lang-linkFR-accueil">
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Click here to see the english version !
              </Tooltip>
            }
          >
            <img
              src="./assets/ukflag.jpg"
              alt="flag"
              className="switch-flagFR"
            />
          </OverlayTrigger>
        </Link>

        <div className="header-accueil">
          {/* <div className="header-h1-accueil">
            <h1>Accueil</h1>
          </div> */}
        </div>

        <div className="presentationFR">
          <h2>Bienvenue</h2>

          <div className="accueil-container">
            <p>
              I wrote my first line of code by the end of February 2020 and
              developped a real passion about coding ever since! I followed a
              "Bootcamp / Intership" @{" "}
              <a
                href="https://lebocal.academy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Le Bocal Academy
              </a>{" "}
              oriented around the Stack MERN (JavaScript, ReactJs and
              Express/NodeJs with two little React Native mobile projects). If I
              had to define myself I would say that I'm more of a "technical
              guy", I like a complex back-end more than a beautifull front-end,
              but I think they are as important one than the other. I'm actually
              following a course from Clement Mihailescu (ex-Google Software
              Engineer) to learn complex algorithms. I love to learn and I love
              to do my best in everything I undertake.
            </p>

            <img src="/assets/diploma.png" alt="diploma" />
          </div>
        </div>

        <FooterFR />
      </div>
    );
  }
}

export default Accueil;
