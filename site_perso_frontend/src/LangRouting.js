import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./LangRouting.css";
import Fade from "react-reveal/Fade";

class LangRouting extends Component {
  render() {
    return (
      <div className="lang-routing">
        <Fade top big>
          <div className="english">
            <h1>
              English version ? Click <Link to="/home">here</Link> !
            </h1>
          </div>
        </Fade>

        <div className="maxime-fabre">
          <p>
            Maxime Fabre
            <img src="./assets/mern.png" alt="stack-mern" />
          </p>
        </div>

        <Fade bottom big>
          <div className="french">
            <h1>
              Version Française ? Cliquez <Link to="/accueil">ici</Link> !
            </h1>
          </div>
        </Fade>
      </div>
    );
  }
}

export default LangRouting;
