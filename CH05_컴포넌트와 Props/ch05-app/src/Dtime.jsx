import React from 'react'

function Dtime(props) {

  let dd = new Date().toLocaleDateString();
  let tt = new Date().toLocaleTimeString();

  return (

    <div>
      { dd + " " + tt }
    </div>

  )
}

export default Dtime