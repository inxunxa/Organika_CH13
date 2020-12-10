import React, { Component } from "react";
import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    qnty: 1,
    name: "Sergio",
  };

  render() {
    return (
      <div className="qntPicker">
        <button className="btn btn-sm btn-info" onClick={this.increase}>
          +
        </button>

        <label>{this.state.qnty}</label>

        <button className="btn btn-sm btn-info" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }

  increase = () => {
    var current = this.state.qnty;
    current += 1;
    this.setState({ qnty: current });
    this.props.onValueChange(current);
  };

  decrease = () => {
    var current = this.state.qnty - 1;

    if (current > 0) {
      this.setState({ qnty: current });
      this.props.onValueChange(current);
    }
  };
}

export default QuantityPicker;
