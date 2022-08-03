import React from 'react'


                                // props
function Student({ id, name, isHere, dispatch }) {

  return (

    <div className='mt-2'>
      <span style={
        {
        textDecoration: isHere ? 'line-through' : 'none',
        color : isHere ? 'black' : 'white',
        cursor : 'pointer',
        }
      }
        onClick={() => {  
          dispatch( {type:'check-student', payload:{id}} )
        }}
      >{`${name}(${id})`}</span>
      <button className='btn btn-outline-danger btn-sm ms-4'
          onClick={()=>{dispatch({type:'delete', payload:{id}})}}
      >
        삭제
      </button>
    </div>

  )
}

export default Student