import React, { Component } from "react";

class DestructuringClassComponent extends Component {

    constructor(){
        super()
    }
  render() {
    const {userName,userAge} = this.props
    return <div>
        <h1> HEllo {userName}  your age is {userAge} </h1>
    </div>;
  }
}

export default DestructuringClassComponent;
