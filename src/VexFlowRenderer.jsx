import React, { Component } from 'react';
import Vex from 'vexflow';
import './App.css';

class VexFlowRenderer extends Component {
  render() {
    const val = Vex.Flow.STEM_WIDTH;
    return (<div>{val}</div>);
  }
}

export default VexFlowRenderer;
