import React from 'react'
import { useState } from 'react'

function UseState03() {

  const [ btn, setBtn ] = useState(0);

  return (
    <div className='container'>
      <p> You clicked { btn } times </p>
      <button className="btn btn-info" onClick={ () => { setBtn ( btn+1 ) } }>
      <i className="fa-solid fa-computer-mouse"></i>
      </button>
    </div>
  )
}

export default UseState03