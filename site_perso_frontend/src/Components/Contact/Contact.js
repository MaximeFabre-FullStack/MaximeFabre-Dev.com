import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./Contact.css";
import { OverlayTrigger, Tooltip, Form } from "react-bootstrap";

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

        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Example select</Form.Label>
            <Form.Control as="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
        </Form>

        <Footer />
      </div>
    );
  }
}

export default Contact;
