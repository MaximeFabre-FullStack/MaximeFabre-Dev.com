import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./Resume.css";
import { OverlayTrigger, Tooltip, ProgressBar } from "react-bootstrap";
import Fade from "react-reveal/Fade";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Navigation />

        <div className="lang-link-resume">
          <Link to="/cv">
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
        </div>

        <div className="header-top">
          <div className="header-h1">
            <h1>Resume</h1>
          </div>
        </div>

        <div className="top-infos">
          <div className="profil-pic">
            <img src="./assets/pp.jpg" alt="profilpic" />
          </div>

          <div className="infos">
            <Fade top big>
              <img src="/assets/mern.png" alt="mern-logo" />
            </Fade>
            <p>
              <img src="/assets/images.png" alt="car-logo" />
              Driving License
            </p>
            <p>
              <img src="/assets/email.png" alt="email-logo" />
              <a href="mailto:maxusdm06@gmail.com,?subject=About%20you%20&body=Dear%20Mr%20Fabre,%20Could%20you%20contact%20us%20?%20-%20kind%20regards.">
                maxusdm06@gmail.com
              </a>
            </p>
            <p>
              <img src="/assets/phone.png" alt="phone-logo" />
              +33 (0)6.99.03.61.97
            </p>
          </div>
        </div>

        <div className="right-container">
          <div className="qualifications">
            <h1> Hard Skills</h1>
            <div className="sous-qual">
              <p>React.Js</p>
              <ProgressBar animated now={85} />
            </div>
            <div className="sous-qual">
              <p>Node.Js</p>
              <ProgressBar animated now={85} />
            </div>
            <div className="sous-qual">
              <p>JavaScript Vanilla</p>
              <ProgressBar animated now={85} />
            </div>
            <div className="sous-qual">
              <p>MongoDB</p>
              <ProgressBar animated now={70} />
            </div>
            <div className="sous-qual">
              <p>Express.Js</p>
              <ProgressBar animated now={80} />
            </div>
            <div className="sous-qual">
              <p>React Native</p>
              <ProgressBar animated now={55} />
            </div>
            <div className="sous-qual">
              <p>API</p>
              <ProgressBar animated now={75} />
            </div>
            <div className="sous-qual">
              <p>MySQL</p>
              <ProgressBar animated now={45} />
            </div>
          </div>

          <br />

          <div className="soft-qualifications">
            <h1>Soft-skills</h1>
            <div className="soft-sous-qual">
              <p>Collaboration</p>
              <ProgressBar className="pb" animated now={85} />
            </div>
            <div className="soft-sous-qual">
              <p>Public Speaking</p>
              <ProgressBar className="pb" animated now={85} />
            </div>
            <div className="soft-sous-qual">
              <p>Adaptability</p>
              <ProgressBar className="pb" animated now={85} />
            </div>
            <div className="soft-sous-qual">
              <p>Creativity</p>
              <ProgressBar className="pb" animated now={65} />
            </div>
            <div className="soft-sous-qual">
              <p>Persuasion</p>
              <ProgressBar className="pb" animated now={80} />
            </div>
          </div>
          <div className="interest">
            <h1>Interest</h1>
            <p>Sports: Rugby, Boxing, MMA...</p>
            <p>
              New Technologies: Machine learning, Artificial Intelligence, Space
              Exploration...
            </p>
            <p>I also like a lot photography, mountain hiking & supercars.</p>
          </div>
        </div>

        <div className="experiences">
          <h1>Experiences</h1>
          <h2>FULL STACK SOFTWARE ENGINEER</h2>
          <h3>LEBOCAL ACADEMY 2020</h3>
          <p>
            After 12 years as a Master Technician working for differents
            companies, I decided to learn and become a Full-Stack developer.
            After a few months of market analysis, I found out that JavaScript
            was one of the most versatile language, with it’s many frameworks,
            you can do a lot of things with it. I learned a lot with this
            «bootcamp» oriented around the full-stack (MERN) from Vanilla Js to
            Databases or Scrum, I gained a lot of knowledge and worked on many
            projects (such as an Instagram «clone»). I am now looking for an
            Internship or Entry-level job to use my new skills for a company.{" "}
            <a href="contact@maximefabre-dev.com,?subject=About%20you%20&body=Dear%20Mr%20Fabre,%20Could%20you%20contact%20us%20?%20-%20kind%20regards.">
              Please get in touch!
            </a>
          </p>
          <span>Sophia Antipolis</span>,<p> FRANCE.</p>
          <h2 className="line">TECHNICIAN</h2>
          <h3>BENTLEY JACK BARCLAY 2018 / 2019</h3>
          <p>
            I carried every kind of mechanical repair and diagnostic, following
            the high standards of the brand.
          </p>
          <span>London</span>,<p> UNITED KINGDOM.</p>
          <h2 className="line">MASTER TECHNICIAN / TEAM MANAGER</h2>
          <h3>RENAULT 2016 / 2018</h3>
          <p>
            I carried every kind of mechanical repair and diagnostic at fi rst,
            but as I quickly became a strong member of the team, I have been
            offered to become Team Manager. I was in charge of customer
            relation, distribution of work and of the relation between the
            workshop manager and the team.
          </p>
          <span>Strasbourg</span> / <span>Cagnes-sur-mer</span>,<p> FRANCE.</p>
          <h2 className="line">MASTER TECHNICIAN</h2>
          <h3>INTERIMA 2013 / 2016</h3>
          <p>I carried every kind of mechanical or electrical repair.</p>
          <span>Nice</span>,<p> FRANCE.</p>
          <h2 className="line">APPRENTICE</h2>
          <h3>OPEL / CHEVROLET 2008 / 2013</h3>
          <p>I have been sharpening my skills in mechanical engineering.</p>
          <span>Nice</span>, <p className="last-p">FRANCE.</p>
        </div>

        <div className="interest-responsive">
          <h1>Interest</h1>
          <p>Sports: Rugby, Boxing, MMA...</p>
          <p>
            New Technologies: Machine learning, Artificial Intelligence, Space
            Exploration...
          </p>
          <p>I also like a lot photography, mountain hiking & supercars.</p>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Resume;
