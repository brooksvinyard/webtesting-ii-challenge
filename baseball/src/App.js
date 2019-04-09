import React, { Component } from 'react';
import Display from './Display/Display.js';
import Dashboard from './Dashboard/Dashboard.js';

import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
  };
  render() {
    return (
      <>
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
        <Dashboard strike={this.strike} ball={this.ball} foul={this.foul} hit={this.hit}/>
      </>
    );
  }

  strike = () => {
    if(this.state.strikes === 2 ){
      this.setState({balls: 0})
      this.setState({strikes: 0})
    } else if (this.state.strikes < 2 ){
      const strike = this.state.strikes + 1; 
      this.setState({strikes: strike})
    } 

  };

  ball = () => {
    if(this.state.balls === 3 ){
      this.setState({balls: 0})
      this.setState({strikes: 0})
    } else if (this.state.balls < 3 ){
      const ball = this.state.balls + 1; 
      this.setState({balls: ball})
    } 
  };

  foul = () => {
    if(this.state.strikes === 2 ){
      return
    } else if (this.state.strikes < 2 ){
      const strike = this.state.strikes + 1; 
      this.setState({strikes: strike})
    } 
  };

  hit = () => {
    this.setState({balls: 0})
    this.setState({strikes: 0})
  };
}

export default App;
