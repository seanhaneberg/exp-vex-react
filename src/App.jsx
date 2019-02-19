import React, { Component } from 'react';
import VexFlowRenderer from './VexFlowRenderer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"/>
        <VexFlowRenderer />
      </div>
    );
  }
}

export default App;
