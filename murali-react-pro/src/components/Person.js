import React from "react";

class Person extends React.Component {
    render() {
        return <div>      
         Person Name is : {this.props.name}
         <br></br>
        Person Age  is :  {this.props.age}
        </div>

    }
}
export default Person