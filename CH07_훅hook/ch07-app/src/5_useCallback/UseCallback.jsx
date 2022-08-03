import React from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

/**
 *  
 * 
 *  - useMemo()
 *   = 값이 아닌 함수를 반환
 *  
 * - 자바스크립에서 함수는 객체의 한 종류이다.
 */



function UseCallback() {

  const memo = useCallback( () => {
    
  } , []);

  return (
    <div>UseCallback</div>
  )
}

export default UseCallback