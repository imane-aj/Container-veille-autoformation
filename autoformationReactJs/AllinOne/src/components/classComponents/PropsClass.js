import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>
        <h4 className='text-success'>Props in Class/compnt</h4>
        <p>je m'appelle {this.props.name} je suis etudiente en <span style={{color:this.props.color}}>{this.props.ecole}</span></p>
      </div>
    )
  }
}
