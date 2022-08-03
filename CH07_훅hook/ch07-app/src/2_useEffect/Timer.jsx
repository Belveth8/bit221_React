import React from 'react'
import { useEffect } from 'react'

function Timer() {

  // 1초 간격으로 콘솔 찍기
  useEffect( () => {
    const updateTimer = setInterval( () => {
      console.log('⏱️. . . . ')
    }, 1000);

    // 클릭마다 마운트 언마운트가 중첩되는 걸 방지하기 위해
    // 마운트 해제 시 실행 정지 ( 이게 없으면 계속 콘솔이 돌아감 )
    // componentUnmount 역할 즉, clear-up 함수 정리함수
    return () => {
      clearInterval(updateTimer);
      console.log('타이머 종료.');
    }

  }, []); // 마운트 && 언마운트 시 처리완료.


  return (
    <div>
      <span> 타이머를 시작합니다  콘솔 확인하세요 !</span>
      </div>
  )
}

export default Timer