import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

import "./Contact.css";
import { OverlayTrigger, Tooltip, Form, Button, Badge } from "react-bootstrap";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      option: "A potential customer",
      message: "",
      version: "english",
      display_email: "none",
      display_message: "none",
    };
  }

  handle_change = async (e) => {
    // will define state values from form / input via name

    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.email, this.state.option, this.state.message);
  };

  submit_form = async () => {
    // if states empty badges will show up

    if (this.state.email === "" && this.state.message === "") {
      await this.setState({
        display_email: "champs_invalide",
        display_message: "champs_invalide",
      });
      return;
    } else if (this.state.email === "") {
      await this.setState({
        display_email: "champs_invalide",
        display_message: "none",
      });
      return;
    } else if (this.state.message === "") {
      await this.setState({
        display_email: "none",
        display_message: "champs_invalide",
      });
      return;
    } else {
      await this.setState({ display_email: "none", display_message: "none" });
      console.log(this.state);
    }
  };

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

        <div className="contact-text">
          <p>
            You want to get in touch? You are at the right place, you can send
            me a mail clicking here{" "}
            <a href="mailto:contact@maximefabre-dev.com,?subject=About%20you%20&body=Dear%20Mr%20Fabre,%20Could%20you%20contact%20us%20?%20-%20kind%20regards.">
              contact@maximefabre-dev.com
            </a>
            {"  "}
            or give me a call <span> +33 (0)6.99.03.61.97. </span> I made a
            little form that you can use too just below, I'll answer as soon as
            possible.
          </p>
        </div>

        <Form className="form">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Email address :</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              name="email"
              onChange={this.handle_change}
            />

            <Badge className={this.state.display_email}>
              *Please fill-in your mail adress.
            </Badge>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>You are :</Form.Label>
            <Form.Control
              as="select"
              name="option"
              onChange={this.handle_change}
            >
              <option>A potential customer</option>
              <option>A recruiter / Agency</option>
              <option>A company looking for a developer</option>
              <option>
                Nothing from above, but I still want to get in touch
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message :</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              onChange={this.handle_change}
            />

            <Badge className={this.state.display_message}>
              *Oups, looks like it's missing something here.
            </Badge>
          </Form.Group>
          <p className="data">
            * your personnal data will be used for professional purposes only.
          </p>
          <Button className="submit-button" onClick={this.submit_form}>
            Let's go !
          </Button>
        </Form>

        <Footer />
      </div>
    );
  }
}

export default Contact;
