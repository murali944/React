import React, { Component } from 'react'
import SonComponent from './SonComponent'

class DadComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            familyName: "Pedapati"
        }
        this.greetParent = this.greetParent.bind(this)
    }

greetParent(family) {
    alert(`greetParent from DadComponent ${this.state.familyName} and name from ${family}`)
}
    render() {
        return (
            <div>
                <SonComponent greetHandler={this.greetParent}></SonComponent>
            </div>
        )
    }
}

export default DadComponent
