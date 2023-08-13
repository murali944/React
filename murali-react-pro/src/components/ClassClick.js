import React, { Component } from "react";

class ClassClick extends Component {
  constructor() {
    super();
    this.state = {
      buttonName: "Click class Button",
    };
  }

  clickHandler() {
    console.log('Button clicked');

  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> {this.state.buttonName} </button>
      </div>
    );
  }
}

export default ClassClick;
