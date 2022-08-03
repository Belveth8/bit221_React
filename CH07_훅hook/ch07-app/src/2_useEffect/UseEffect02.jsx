import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function UseEffect02() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');

  const updateInput = (e) => {
    setName(e.target.value);
  }

  const updateCount = () => {
    setCount(count + 1);
  }

  // useEffect 속 console.log 가 두번 찍히는 이유
  // -> index.js에 render dom에 감싸져있는 strickmode 때문
  // strick 모드는 자체적으로 코드의 오류가 있는지 검사한다.

  // useEffect
  // 렌더링마다 매번 사이드 이펙트(console로) 실행
  // useEffect(() => {
  //   console.log('렌더링 🎇 테스트');
  // })

  // 마운팅 && count가 변할 때마다 사이드 이펙트 실행
  // useEffect(() => {
  //   console.log('렌더링 🎇 테스트');
  // }, [count])

 // 마운팅 && name이 변할 때마다 사이드 이펙트 실행
  useEffect(() => {
    console.log('렌더링 🎇 테스트');
  },[name])

  return (
    <div className='container'>
      <p> COUNT : {count} </p>
      <button className='btn btn-success' onClick={updateCount}>
        Update
      </button>
      <div>
        <input type='text' onChange={updateInput} />
      </div>
      <p> { name }</p>
    </div>
  )
}

export default UseEffect02