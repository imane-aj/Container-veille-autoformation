import React from 'react'
import { useState } from 'react';

function State() {
    const [name, setName] = useState({
        name : "imane",
        lastName : "ajroudi"
    });
  return (
    <div>
        <h4 className='text-success'>State in Funt/compnt</h4>
        <p>my name's {name.name}, my lastName's {name.lastName}</p>
    </div>
  )
}

export default State