import React, { Component } from "react";
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import MapTracker from './components/MapTracker';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
`;

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <Wrapper>
        <MapTracker/>
        </Wrapper>
      );
  }
}
