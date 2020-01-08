import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../../config/constants/routePaths";
import Particles from "../../containers/layout/particles";

import Header from "../../containers/layout/header";
import Footer from "../../containers/layout/footer";

import Home from "../../containers/home";
import About from "../../containers/about";

class RoutesComponent extends Component {
  render() {
    return (
      <>
        <Particles />
        <Header />
        <section className="page-container">
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
          </Switch>
        </section>
        <Footer />
      </>
    );
  }
}

export default RoutesComponent;
