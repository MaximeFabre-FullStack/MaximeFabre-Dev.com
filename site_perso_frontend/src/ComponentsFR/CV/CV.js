import React, { Component } from "react";
import NavigationFR from "../NavigationFR/NavigationFR";
import FooterFR from "../FooterFR/FooterFR";
import { Link } from "react-router-dom";

import "./CV.css";
import { OverlayTrigger, Tooltip, ProgressBar } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50,
    };
  }

  render() {
    return (
      <div className="cv">
        <NavigationFR />

        <div className="lang-linkFR-cv">
          <Link to="/resume">
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
        </div>

        <div className="header-topFR">
          <div className="header-h1FR">
            <h1>Curriculum vitae</h1>
          </div>
        </div>

        <div className="top-infosFR">
          <div className="profil-photo">
            <img src="./assets/pp.jpg" alt="profilpic" />
          </div>

          <div className="infosFR">
            <Fade top big>
              <img src="/assets/mern.png" alt="mern-logo" />
            </Fade>
            <p>
              <img src="/assets/images.png" alt="car-logo" />
              Permis B, véhiculé
            </p>
            <p>
              <img src="/assets/email.png" alt="email-logo" />
              <a
                href="mailto:contact@maximefabre-dev.com,?subject=Dites%20moi%20tout!&body=Cher%20Mr%20Fabre,%20nous%20aimerions%20entrer%20en%20contact%20avec%20vous.%20Merci%20de%20nous%20recontacter%20-%20%20Cordialement."
                className="mailtoFR"
              >
                contact@maximefabre-dev.com
              </a>
            </p>
            <p>
              <img src="/assets/phone.png" alt="phone-logo" />
              +33 (0)6.99.03.61.97
            </p>
          </div>
        </div>

        <div className="right-containerFR">
          <div className="qualificationsFR">
            <h1>Competences Techniques</h1>
            <div className="sous-qualFR">
              <p>React.Js</p>
              <ProgressBar animated now={85} />
            </div>
            <div className="sous-qualFR">
              <p>Node.Js</p>
              <ProgressBar animated now={85} />
            </div>
            <div className="sous-qualFR">
              <p>JavaScript Vanilla</p>
              <ProgressBar animated now={85} />
            </div>
            <div className="sous-qualFR">
              <p>MongoDB</p>
              <ProgressBar animated now={70} />
            </div>
            <div className="sous-qualFR">
              <p>Express.Js</p>
              <ProgressBar animated now={80} />
            </div>
            <div className="sous-qualFR">
              <p>React Native</p>
              <ProgressBar animated now={55} />
            </div>
            <div className="sous-qualFR">
              <p>API</p>
              <ProgressBar animated now={75} />
            </div>
            <div className="sous-qualFR">
              <p>MySQL</p>
              <ProgressBar animated now={45} />
            </div>
          </div>

          <br />

          <div className="soft-qualificationsFR">
            <h1>Competences Personnelles</h1>
            <div className="soft-sous-qualFR">
              <p>Travail d'équipe</p>
              <ProgressBar className="pbFR" animated now={85} />
            </div>
            <div className="soft-sous-qualFR">
              <p>Parler en public</p>
              <ProgressBar className="pbFR" animated now={85} />
            </div>
            <div className="soft-sous-qualFR">
              <p>Capacité d'adaptation</p>
              <ProgressBar className="pbFR" animated now={85} />
            </div>
            <div className="soft-sous-qualFR">
              <p>Créativité</p>
              <ProgressBar className="pbFR" animated now={65} />
            </div>
            <div className="soft-sous-qualFR">
              <p>Persuasion</p>
              <ProgressBar className="pbFR" animated now={80} />
            </div>
          </div>

          <div className="interets">
            <h1>Interets</h1>
            <p>Sports: Rugby, Boxe, MMA...</p>
            <p>
              Nouvelles Technologies: Machine learning, Artificial Intelligence,
              Space Exploration...
            </p>
            <p>
              J'aime aussi beaucoup la photographie, la randonnée & les
              supercars
            </p>
          </div>
        </div>

        <div className="experiencesFR">
          <h1>Experiences</h1>
          <h2>FULL STACK SOFTWARE ENGINEER</h2>
          <h3>LEBOCAL ACADEMY MARCH 2020</h3>
          <p>
            After 12 years as a Master Technician working for differents
            companies, I decided to learn and become a Full-Stack developer.
            After a few months of market analysis, I found out that JavaScript
            was one of the most versatile language, with it’s many frameworks,
            you can do a lot of things with it. I learned a lot with this
            «bootcamp» oriented around the full-stack (MERN) from Vanilla Js to
            Databases or Scrum, I gained a lot of knowledge and worked on many
            projects(Such as an Instagram «clone»). I am now looking for an
            Internship or Entry-level job to use my new skills for a company.{" "}
            <a
              href="mailto:maxusdm06@gmail.com,?subject=Dites%20moi%20tout!&body=Cher%20Mr%20Fabre,%20nous%20aimerions%20entrer%20en%20contact%20avec%20vous.%20Merci%20de%20nous%20recontacter%20-%20%20Cordialement."
              className="mailtoFR"
            >
              Please get in touch!
            </a>
          </p>
          <span>Sophia Antipolis</span>, <p>FRANCE.</p>
          <h2>TECHNICIAN</h2>
          <h3>BENTLEY JACK BARCLAY 2018 / 2019</h3>
          <p>
            I carried every kind of mechanical repair and diagnostic, following
            the high standards of the brand.
          </p>
          <span>London</span>, <p>UNITED KINGDOM.</p>
          <h2>MASTER TECHNICIAN / TEAM MANAGER</h2>
          <h3>RENAULT 2016 / 2018</h3>
          <p>
            I carried every kind of mechanical repair and diagnostic at fi rst,
            but as I quickly became a strong member of the team, I have been
            offered to become Team Manager. I was in charge of customer
            relation, distribution of work and of the relation between the
            workshop manager and the team.
          </p>
          <span>Strasbourg</span> / <span>Cagnes-sur-mer</span>, <p>FRANCE.</p>
          <h2>MASTER TECHNICIAN</h2>
          <h3>INTERIMA 2013 / 2016</h3>
          <p>I carried every kind of mechanical or electrical repair.</p>
          <span>Nice</span>,<p> FRANCE.</p>
          <h2>APPRENTICE</h2>
          <h3>OPEL / CHEVROLET 2008 / 2013</h3>
          <p>I have been sharpening my skills in mechanical engineering.</p>
          <span>Nice</span>,<p className="last-pFR"> FRANCE.</p>
        </div>

        <div className="interets-responsive">
          <h1>Interets</h1>
          <p>Sports: Rugby, Boxe, MMA...</p>
          <p>
            Nouvelles Technologies: Machine learning, Artificial Intelligence,
            Space Exploration...
          </p>
          <p>
            J'aime aussi beaucoup la photographie, la randonnée & les supercars
          </p>
        </div>

        <FooterFR />
      </div>
    );
  }
}

export default CV;
