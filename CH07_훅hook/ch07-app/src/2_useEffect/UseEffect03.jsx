import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Timer from './Timer'

function UseEffect03() {
  // 토글 버튼
  const [showTimer, setShowTimer] = useState(false);
  // 클릭 시 색변경 state
  const [btnColor, setBtnColor] = useState('btn btn-info');
  const [msg, setMsg] = useState('Toggle Timer Start ! ');


  return (
    <div className='container'>
      <button className={btnColor} onClick= { () => { 
        setShowTimer(!showTimer) 
        setBtnColor (!showTimer ? 'btn btn-danger' : 'btn btn-info');
        setMsg (!showTimer ? ' Reloading . . . ' : 'Toggle Timer Start !' ) // state 변수를 넣으니까 흰색창으로 넘어간다.
         } }
         >
        <i className="fa-solid fa-stopwatch"></i><span className='ml-2' />
        {msg}
      </button>
      <hr />
      {
        showTimer && <Timer />
      }
    </div>
  )
}

export default UseEffect03