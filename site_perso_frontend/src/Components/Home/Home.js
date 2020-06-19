import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./Home.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Navigation />

        <Link to="/accueil" className="lang-link-home">
          <OverlayTrigger
            overlay={
              <Tooltip id="tooltip-disabled">
                Cliquez ici pour afficher la version française !
              </Tooltip>
            }
          >
            <img
              src="./assets/frenchflag.jpeg"
              alt="flag"
              className="switch-flag"
            />
          </OverlayTrigger>
        </Link>

        <div className="header-home">
          {/* <div className="header-h1-home">
            <h1>Home</h1>
          </div> */}
        </div>

        <div className="presentation">
          <h2>Welcome</h2>

          <div className="home-container">
            <p>
              First, thank you for being here, as you can read pretty much
              everywhere on this website, I am Maxime Fabre, a 27 years old
              Full-Stack Web Developer. I wrote my first line of code by the end
              of February 2020 and developped a real passion about coding ever
              since! I followed a "Bootcamp / Intership" @{" "}
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

        <Footer />
      </div>
    );
  }
}

export default Home;
