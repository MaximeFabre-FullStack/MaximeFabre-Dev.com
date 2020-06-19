import React, { Component } from "react";
import NavigationFR from "../NavigationFR/NavigationFR";
import FooterFR from "../FooterFR/FooterFR";
import { Link } from "react-router-dom";

import "./ContactFR.css";
import { OverlayTrigger, Tooltip, Form, Button } from "react-bootstrap";

class ContactFR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      option: "Un(e) client(e) potentiel(le)",
      message: "",
    };
  }

  handle_changeFR = async (e) => {
    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.email, this.state.option, this.state.message);
  };

  render() {
    return (
      <div className="contactFR">
        <NavigationFR />

        <div className="lang-linkFR-contact">
          <Link to="/contact">
            <OverlayTrigger
              overlay={
                <Tooltip id="tooltip-disabled">
                  Click here to see the english version !
                </Tooltip>
              }
            >
              <img
                src="/assets/ukflag.jpg"
                alt="flag"
                className="switch-flagFR"
              />
            </OverlayTrigger>
          </Link>
        </div>

        <div className="header-contactFR">
          <div className="header-h1-contactFR">
            <h1>Contact</h1>
          </div>
        </div>

        <Form className="formFR">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Votre adresse mail :</Form.Label>
            <Form.Control
              type="email"
              placeholder="nom@exemple.com"
              name="email"
              onChange={this.handle_changeFR}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Vous etes :</Form.Label>
            <Form.Control
              as="select"
              name="option"
              onChange={this.handle_changeFR}
            >
              <option>Un(e) client(e) potentiel(le)</option>
              <option>Un(e) recruteur(se) / Une agence de recrutement</option>
              <option>
                Un(e) chargé(e) de Ressources Humaines a la recherche d'un
                developpeur
              </option>
              <option>
                Rien de tout ça, mais je souhaite tout de meme rentrer en
                contact
              </option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Votre message : </Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              name="message"
              onChange={this.handle_changeFR}
            />
          </Form.Group>
          <Button className="submit-button">C'est parti</Button>
        </Form>

        <FooterFR />
      </div>
    );
  }
}

export default ContactFR;
