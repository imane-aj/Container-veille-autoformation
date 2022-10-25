import React from 'react'

function Props(props) {
  return (
    <div>
        <h4 className='text-success'>Props in Funt/compnt</h4>
        <p>je m'appelle {props.name}, je suis etudiente en <span style={{color:props.color}}>{props.ecole}</span></p>
    </div>
  )
}

export default Props