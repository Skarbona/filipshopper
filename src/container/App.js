import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as appEpics from "../store/app/epic";

import Header from "./Header";
import Pages from "../components/Pages";

export const App = ({ initProductData, initTranslations }) => {

  useEffect(() => {
    initProductData();
    initTranslations();
  }, []);

  return (
    <React.Fragment>
      <Header/>
      <Pages/>
    </React.Fragment>
  );
};


export default withRouter(
  connect(
    null,
    { initProductData: appEpics.initProductData, initTranslations: appEpics.initTranslations }
  )(App)
);
