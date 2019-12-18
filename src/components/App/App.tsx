import React, { useEffect } from "react";
import { connect, MapDispatchToPropsParam } from "react-redux";
import { withRouter } from "react-router-dom";

import { IDispatchAppProps, IAppProps } from "./App.interface";
import { IStore } from "../../store/store.interface";
import * as appEpics from "../../store/app/epic";
import Header from "../Header/";
import Pages from "../Pages/";


export const AppWrapper: React.FC<IAppProps> = ({ initProductData, initTranslations }) => {

  React.useEffect(() => {
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

const mapDispatchToProps: MapDispatchToPropsParam<any, any> = {
  initProductData: appEpics.initProductData,
  initTranslations: appEpics.initTranslations,
};


export default withRouter(
  connect<{}, IDispatchAppProps, {}, IStore>(
    null,
    mapDispatchToProps
  )(AppWrapper)
);
