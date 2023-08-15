import React, { Component } from "react";

class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            message: "Hello User",
        };

        // this.clickHandler = this.clickHandler.bind(this);
    }

    //   clickHandler() {
    //     console.log("Hello Murali");
    //     this.setState({
    //       message: "Hello Bro",
    //     });
    //   }

    // Class property as arrow function  
    clickHandler = () => {
        this.setState({ message: "APPROACH 4 : BYE!" });
    };
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* approach-1 : using bind method */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/*approach-2 : using arrow function in the render() */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                {/*approach-3 : using bind in class constructor, added below line 
            this.clickHandler=this.clickHandler.bind(this); */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default EventBind;
