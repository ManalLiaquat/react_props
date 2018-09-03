import React, { Component } from "react";
import onImage from "./../../images/on.jpg";

class OnBulb extends Component {
  changeState(param) {
    this.props.switch(param);
  }

  render() {
    return (
      <div>
        <img src={onImage} alt="On Bulb" />
        <div>
          <button className="btn btn-success btn-lg" onClick={this.changeState.bind(this, 'on')}>On</button>
          <button className="btn btn-warning btn-lg" onClick={this.changeState.bind(this, 'break')}>Break</button>
          <button className="btn btn-danger btn-lg" onClick={this.changeState.bind(this, 'off')}>Off</button>
        </div>
      </div>
    );
  }
}

export default OnBulb;
