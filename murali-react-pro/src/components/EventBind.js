import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello User",
    };
  }

  clickHandler() {
    console.log("Hello Murali");
    this.setState({
      message: "Hello Bro",
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={()=>this.clickHandler()}>Click</button>
      </div>
    );
  }
}

export default EventBind;
