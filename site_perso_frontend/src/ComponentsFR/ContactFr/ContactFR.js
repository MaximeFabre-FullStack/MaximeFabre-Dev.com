import React, { Component } from "react";
import NavigationFR from "../NavigationFR/NavigationFR";
import FooterFR from "../FooterFR/FooterFR";
import { Link } from "react-router-dom";

import "./ContactFR.css";
import { OverlayTrigger, Tooltip, Form, Button, Badge } from "react-bootstrap";

class ContactFR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      option: "Un(e) client(e) potentiel(le)",
      message: "",
      version: "french",
      display_email: "none",
      display_message: "none",
    };
  }

  handle_changeFR = async (e) => {
    // will define state values from form / input via name

    await this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.email, this.state.option, this.state.message);
  };

  submit_formFR = async () => {
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
    } else if (
      localStorage.getItem("email") != null &&
      localStorage.getItem("email") === this.state.email
    ) {
      // if localstorage messageSent && localstorage email == this.state.email, prompt to tell the a message has already been sent

      const reponse = prompt(
        "Un message a déjà été envoyé avec l'adresse " +
          localStorage.getItem("email") +
          ", voulez vous en envoyer un autre? (oui / non) "
      );
      if (reponse === "non") {
        return;
      } else {
        // if all conditions ok, continue

        await this.setState({
          display_email: "none",
          display_message: "none",
        });
        localStorage.setItem("messageSent", "true");
        const mail = this.state.email;
        localStorage.setItem("email", mail);
        console.log(this.state);
      }
    } else {
      await this.setState({ display_email: "none", display_message: "none" });
      localStorage.setItem("messageSent", "true");
      const mail = this.state.email;
      localStorage.setItem("email", mail);
      console.log(this.state);
    }
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

        <div className="contact-textFR">
          <p>
            Vous voulez entrer en contact ? Vous etes au bon endroit, vous
            pouvez m'envoyer un mail directement en cliquant ici{" "}
            <a
              href="mailto:contact@maximefabre-dev.com,?subject=Dites%20moi%20tout!&body=Cher%20Mr%20Fabre,%20nous%20aimerions%20entrer%20en%20contact%20avec%20vous.%20Merci%20de%20nous%20recontacter%20-%20%20Cordialement."
              className="contact-lien"
            >
              contact@maximefabre-dev.com
            </a>{" "}
            ou au <span> +33 (0)6.99.03.61.97. </span> Vous pouvez sinon me
            contacter via le formulaire ci-dessous, je vous recontacterais dans
            les meilleurs delais.
          </p>
        </div>

        <Form className="formFR" onSubmit={this.submit_formFR}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Votre adresse mail :</Form.Label>
            <Form.Control
              type="email"
              placeholder="nom@exemple.com"
              name="email"
              onChange={this.handle_changeFR}
            />
            <Badge className={this.state.display_email}>
              *Merci de renseigner une adresse mail.
            </Badge>
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
            <Badge className={this.state.display_message}>
              *Oups, on dirait qu'il manque quelque chose ici!
            </Badge>
          </Form.Group>
          <p className="donnes">
            * les données de ce formulaire seront utilisées uniquement a des
            fins professionnelles.
          </p>
          <Button className="submit-buttonFR" onClick={this.submit_formFR}>
            C'est parti !
          </Button>
        </Form>

        <FooterFR />
      </div>
    );
  }
}

export default ContactFR;
