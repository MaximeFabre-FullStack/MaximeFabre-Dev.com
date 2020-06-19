import React, { Component } from "react";

import "./FooterFR.css";

class FooterFR extends Component {
  render() {
    return (
      <div className="footerFR">
        <img src="/assets/logo-site copie.png" alt="logo" />

        <div className="copyright">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>
            Remerciements à{" "}
            <a
              href="https://lebocal.academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le Bocal Academy
            </a>{" "}
            pour le support.
          </p>
        </div>
      </div>
    );
  }
}

export default FooterFR;
