import React from 'react'
import { useState } from 'react'


const UseState01 = () => {

  const [ timerBtn, setTimerBtn ] = useState(1)
  // 하드코딩의 지양과 은닉화를 위해
  const handler = () => {
    if ( timerBtn >= 24 ) {
      setTimerBtn (1);
    } else {
    setTimerBtn ( timerBtn + 1 )
   }
  }

  return (

    <>
      <span> 현재시각 : { timerBtn } 시</span>
      <button className='btn btn-danger' onClick={ handler }>Update</button>
    </>
  )

}

export default UseState01