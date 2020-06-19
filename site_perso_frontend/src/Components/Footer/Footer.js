import React, { Component } from "react";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img src="/assets/logo-site copie.png" alt="logo" />

        <div className="copyright">
          <p>Copyright © {new Date().getFullYear()}</p>
          <p>
            Thanks to{" "}
            <a
              href="https://lebocal.academy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Le Bocal Academy
            </a>{" "}
            for the support.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
