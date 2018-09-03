import React, { Component } from "react";
import logo from "./logo.svg";
import OnBulb from "./Screens/OnBulb/OnBulb";
import OffBulb from "./Screens/OffBulb/OffBulb";
import BreakBulb from "./Screens/BreakBulb/BreakBulb";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bulb: "off"
    };
    this.switch = this.switch.bind(this);
  }

  switch(bulb_condition) {
    this.setState({ bulb: bulb_condition });
  }

  body() {
    let { bulb } = this.state;
    return (
      <div>
        {bulb === "off" && <OffBulb switch={this.switch} />}
        {bulb === "on" && <OnBulb switch={this.switch} />}
        {bulb === "break" && <BreakBulb switch={this.switch} />}
      </div>
    );
  }

  header() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }

  render() {
    return (
      <div className="App">
        {this.header()}
        {this.body()}
      </div>
    );
  }
}

export default App;
