import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Reviews from "./pages/reviews";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/reviews" component={Reviews} />
      </Switch>
    </Layout>
  );
};

export default Routes;
