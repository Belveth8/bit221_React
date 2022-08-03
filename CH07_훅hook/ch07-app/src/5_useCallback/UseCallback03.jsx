// import React, { useState } from 'react'
// import Box from './Box'

// function UseCallback03() {

//   const [size, setSize] = useState(100);
//   const [ isDark, setIsDark ] = useState(false);

//   const createBoxStyle = () => {
//     return {
//       backgroundColor:'yellowgreen',
//       width:`${size}px`,
//       heigth:`${size}px`
//     }
//   }

//   return (

//     <div className='container' style={ { backgroundColor : isDark ? '#333'  : 'white' } }>
//             <button className='btn btn-info'
//           onClick={ () => setIsDark(!isDark) }
//       >
//         Change Theme
//       </button>
//       <input className='form-control mb-1'
//         type='number'
//         value={ size }
//         onChange= { (e) => {return (setSize(e.target.value))}  }
//       />

//       <br />
//        {/* Box에 props로 css 속성 전달하기 */}
//       <Box createBoxStyle={createBoxStyle} />
//     </div>

//   )
// }

// export default UseCallback03

import React, { useState } from 'react'
import { useCallback } from 'react';
import Box from './Box';

function UseCallback03() {
  const [size, setSize]=useState(100);
  const [isDark, setIsDark]=useState(false);

  const createBoxStyle = useCallback( () => {
    return{
      backgroundColor:'yellowgreen',
      width:`${size}px`,
      height:`${size}px`
    }
  } , [size] )

  // const createBoxStyle=()=>{
  //   return{
  //     backgroundColor:'yellowgreen',
  //     width:`${size}px`,
  //     height:`${size}px`
  //   }
  // }

  return (
    <div className='container' style={{background: isDark ? 'white':'black'}}>
      <button className='btn btn-info mb-1'
      onClick={()=>{setIsDark(!isDark)}}>Change Theme</button>
      <input className='form-control' type={'number'} value={size}
      onChange={(e)=>setSize(e.target.value)}
      />

      <br/>

      <Box createBoxStyle={createBoxStyle}/>
    </div>
  )
}

export default UseCallback03