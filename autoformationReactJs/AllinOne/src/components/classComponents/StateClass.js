import React, { Component } from 'react'

export class StateClass extends Component {
    name = {
        name : "imane",
        lastName : "ajroudi"
    }
  render() {
    return (
      <div>
        <h4 className='text-success'>State in Class/compnt</h4>
        <p>my name's {this.name.name}, my lastName's {this.name.lastName}</p>
      </div>
    )
  }
}

export default StateClass