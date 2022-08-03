import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'
import UseMemo01 from './UseMemo01';


const hardCalculator = (number) => {
  let total = 0;
  // CPU  부화주기
  for(let i=0; i<10000000; i++) {
    total += i;
  }
  // console.log('복잡한 계산 !');
  return number + total ;
}

function useMemo02() {
  

  const [ hardNumber, setHardNumber ] = useState(0);

   const hard = hardCalculator(hardNumber);
  // const hard = useMemo ( () => { 
  //   return hardCalculator(hardNumber);
  // }, [hardNumber] )

  console.log('3번 콘솔')

  return (

    <div className='container'>
      <div style={{ border: '1px solid green', padding: '20px' }}>
        <h5 style={{ color: '#999' }}>Hard working</h5>
        <input
          className='form-control' type='number'
          value={ hardNumber }
          onChange={(e) => setHardNumber(parseInt(e.target.value))} // string 값을 int로 파싱 형변환
        />
        <hr />
        <span> ∫∛ ∝^ = { hard }</span>
      </div>
      <UseMemo01 />
    </div>

  )

}

export default useMemo02