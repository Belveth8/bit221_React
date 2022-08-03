import React from 'react'
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'



function UseCallback02() {

  const [ number, setNumber ] = useState(0);

  // setState의 변경으로 랜더링 될 때마다 값이 재할당 되어
  // useEffect의 콜백함수가 계속 호출된다
  // const someFunction = () => {
  //   console.log(`someFunc number : ${ number }` )
  // }
  
// 첫 렌더링했을 때 함수에 할당된 주소를 그대로 유지 ( 쉽게 말하자면 첫 렌더링 시, 함수에 할당된 데이터는 고정 )
// deps 에 변경된 number를 넣으면 number가 변경 때마다 다시 콜백함수 실행
  const someFunction = useCallback ( () => {
    console.log(`someFunc number : ${ number }` )
  }, [number] )


  useEffect ( () => {
    console.log('someFunc이 변경되었습니다.');
  }, [someFunction] )

  return (


    <div className='container'>
      <input className='form-control'
      type='number'
      value = { number }
      onChange = { (e) => { setNumber(e.target.value) } }
      />
      <button className='btn btn-info'
        onClick={ someFunction } > 
      Call someFunc 
      </button>      
    </div>

  )
}

export default UseCallback02