import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

/** 클래스 컴포넌트 생명주기 함수 ( componentMount,Unmount,Update )
 *  useEffect : 렌더링 될 때마다 todo 할 수 있는 역할
 *  : useEffect ( 콜백함수  , 의존성dependency배열[] );
 * 
 *  useEffect ( () => {}  ); 렌더링 될 때마다 전부 콜백함수가 실행된다
 * 
 * 콜백함수, [ 렌더링 될 state ] 를 쓰면 state가 변경될 때만 렌더링된다
 * ex) 게시글 목록들은 첫 마운트 되고 렌더링이 될 필요가 없다
 */

 const styles = {
  container: {
    padding: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    padding: 20,
  },
  icon: {
    fontSize: 25,
  }
}

// useEffect 테스트
  let kiwis = [];

function UseEffect01() {

  const [ count, setCount ] = useState(0);

  useEffect( () => {
    if (count === 0) {
      kiwis=[];
    } else {
      kiwis.push('🥝');
    }

    document.title ='🥕 ' + count + ' update';
  }, [count] );

  return (
    <div className='container' style={styles.container}>
 
      <span>{ kiwis +' 💨 '+count }</span>
      <hr></hr>
      <p className='h3'>You clicked {count} times</p>
      <hr />
 
      <button className='btn btn-info' style={styles.btn}
        onClick={ () => {
          setCount(count + 1);
        }}>
 
        <i className="fa-solid fa-computer-mouse" style={styles.icon}></i>
        <br />
        <span>Click Me</span>
      </button>
 
    </div>

  )
}

export default UseEffect01