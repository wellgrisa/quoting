import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import NavBar from '../../components/navbar';

import '../../style';

class App extends Component {
  static propTypes = {
      children: PropTypes.any.isRequired,
  }
  render () {

    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default connect()(App);
