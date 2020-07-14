import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Faq from "./pages/faq";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Faq} />
      </Switch>
    </Layout>
  );
};

export default Routes;
