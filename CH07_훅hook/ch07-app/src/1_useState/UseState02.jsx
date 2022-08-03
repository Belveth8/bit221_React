import React, { useState } from 'react'


function UseState02() {

 const [ input , setInput ] = useState('') ;
 const [ names, setNames ] = useState([]);

 const inputChangeHandler = (e) => {
  setInput (e.target.value);
 }

 const uploadHandler = () => {
  setNames( (이전상태값을받은이벤트함수이름) => {
    console.log(이전상태값을받은이벤트함수이름);
    return [...이전상태값을받은이벤트함수이름, input + '\n']
  });
 }


  return (
    <div className='container'>
      <div style={ {display:'flex'} }>
        <input type='text' className='form-control' style={ { width : '300px' } } 
          placeholder='이름을 입력해주세요.'
          onChange= { inputChangeHandler } 
        />
        <button className='btn btn-danger m-2' onClick={ uploadHandler }>
          업로드
        </button>
      </div>
        <textarea className='form-control mt-1' rows={10} 
          defaultValue= { names.toString().split(',').join('') }
        />
    </div>
  )
}

export default UseState02