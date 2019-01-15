import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { initProductData, initTranslations } from '../actions/init';

import Header from './Header';
import Pages from '../components/Pages'

class App extends React.Component {

  componentDidMount = () => {
    const { initProductData, initTranslations } = this.props;
      initProductData();
      initTranslations();
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
            <Pages />
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(null, { initProductData, initTranslations })(App));
