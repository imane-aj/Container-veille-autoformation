import React, { Component } from 'react'

export class EventsClass extends Component {
    state = {name: "imane"}
    onClick = () =>{
        return alert(this.state.name)
    }
  render() {
    return (
      <div>
        <h4 className='text-success'>Events in Class</h4>
        <button className='btn btn-primary' onClick={this.onClick}>Click Here</button>
      </div>
    )
  }
}

export default EventsClass