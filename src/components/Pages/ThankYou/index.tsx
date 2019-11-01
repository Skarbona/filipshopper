import React from "react";

import PageTitle from "../../Elements/Title";
import { IThankYouProps } from "./ThankYou.interface";

const ThankYou = (): IThankYouProps => (
  <div className="thankyou-page">
    <PageTitle title="Thank You!"/>
    <div className="thankyou-page__message">
        <span className="btn-floating btn-large pulse green">
          <i className="material-icons">check</i>
        </span>
      <h2> You've made a purchase!</h2>
    </div>
  </div>
);


export default ThankYou;
