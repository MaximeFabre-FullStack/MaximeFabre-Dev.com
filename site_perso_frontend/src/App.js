import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LangRouting from "./LangRouting";

import Home from "./Components/Home/Home";
import Resume from "./Components/Resume/Resume";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

import Accueil from "./ComponentsFR/Accueil/Accueil";
import CV from "./ComponentsFR/CV/CV";
import ContactFR from "./ComponentsFR/ContactFr/ContactFR";
import ProjetFr from "./ComponentsFR/ProjetFR/ProjetFR";

import Test from "./ComponentsFR/test";

class App extends Component {
  render() {
    return (
      <Router>
        {/* Contenu s'affichant en permanance */}

        {/* Affichage conditionnel des composant servant de "page" */}
        <Switch>
          {/* Route de la page d'accueil */}
          <Route exact path="/" component={LangRouting} />

          <Route exact path="/home" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />

          <Route exact path="/accueil" component={Accueil} />
          <Route exact path="/cv" component={CV} />
          <Route exact path="/contact/fr" component={ContactFR} />
          <Route exact path="/projets" component={ProjetFr} />

          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    );
  }
}

export default App;
