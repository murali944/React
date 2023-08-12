import React,{Component} from "react";

class Message extends React.Component {

    constructor(){
        super()
        this.state = {
            message : "Hello User !!"
        }
    }

    changeMessage(){
        this.setState({
            message : "Thanks for your Subscription !!"
        })
    }

    render() {
        return <div>
            <p>Hello User !!</p>
            <p>MESSAGE FROM STATE : {this.state.message}</p>
            <button onClick={()=>{this.changeMessage()}}> Subscribe</button>
        </div>
    }

}
export default Message