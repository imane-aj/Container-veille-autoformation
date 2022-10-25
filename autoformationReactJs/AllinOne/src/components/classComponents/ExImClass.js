import React, { Component } from 'react'
import {names as name} from '../../Names'
export class ExImClass extends Component {
  render() {
    return (
      <div>
        <h4 className='text-success'>export array from another file</h4>
        <p>{name[0]}</p>
        <p>{name[1]}</p>
        <p>{name[2]}</p>
      </div>
    )
  }
}

export default ExImClass