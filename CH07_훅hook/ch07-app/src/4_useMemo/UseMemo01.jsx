import React from 'react'
/**
 *  memorization  컴퓨터 최적화를 위해서 사용하는 개념
 * 
 * : 동일한 처리를 하는 함수를 반복적으로 호출해야 한다면?
 *  사용할 컴포넌트에 캐싱 ( 첫 마운트될 때  재렌더링이 필요한 컴포넌트에 보내줘서 코드의 간결 )
 *  - 맨 처음 값을 계산할 때 해당 값을 메모리에 저장해서
 *     필요할 때마다, 중복 계산 없이 메모리에서 꺼내어 재사용하는 기법
 *  // 매개변수론 콜백함수와, deps 의존성 배열이 붙는다
 *  useMemo ( 콜백함수 , 의존성배열[] );
 *  
 */

function UseMemo01() {
  console.log('2번 콘솔')
  return (
    <div>UseMemo01</div>
  )
}

export default UseMemo01