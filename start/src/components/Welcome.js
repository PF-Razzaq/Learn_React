import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Name: {this.props.Name}</h1>
    }
}

export default Welcome