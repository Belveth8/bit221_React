import React, { useReducer } from 'react'
import { useState } from 'react'

// java 에서 immer
const ACTION_TYPES = {
  DEPOSIT : 'despsit',
  WITHDRAW : 'withdraw',
}

                 // ( count 상태값, 요구내용 )
const reducer = (state, action)  => {
  console.log( state, action );
  switch (action.type){
    case ACTION_TYPES.DEPOSIT :
      return state + action.payload;

    case ACTION_TYPES.WITHDRAW :
        return state - action.payload;

      default :
        return state;
  }

}

function UseReducer02() {

  const [ money, setMoney ] = useState ();
  const [ count, dispatch ] = useReducer(reducer, 0);    // 반환  [ state , dipath함수 ]

  return (

    <div className='container'>
      <h6> 은행에 오신 것을 환영합니다 </h6>
      <h2> 잔고 : { count }</h2>
      <div>
        <input className='form-control mb-2' type={'number'} value={ money }  step='1000'
          onChange={ (e)=> {setMoney(parseInt(e.target.value)) } }
        />
        <button className='btn btn-success'
          onClick={ () => {dispatch({ type:ACTION_TYPES.DEPOSIT, payload:money })}}> {/* type은 action의 식별자의 역할 */}
            예금
        </button>
        <button className='btn btn-danger'
         onClick={ () => {dispatch({ type:ACTION_TYPES.WITHDRAW, payload:money })}}>
          출금
          </button>
      </div>
    </div>

  )
}

export default UseReducer02