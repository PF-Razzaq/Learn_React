import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetHandler = this.greetHandler.bind(this)
    }

    greetHandler(childName){
        alert(`Hello ${this.state.parentName} From ${childName}`)
    }
    

  render() {
    return (
      <div>
        <ChildComponent  greetHandler = {this.greetHandler}/>
      </div>
    )
  }
}

export default ParentComponent
