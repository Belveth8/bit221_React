import React, { useState } from 'react'

function Box() {

  let [ bookName, setBookName ] = useState ('리액트 네이티브')
  let [ bookPage, setBookPage ] = useState ('300')
  let [ likeBtn, setLikeBtn ] = useState (0);

  return ( 
    <>
    <img />
    <div>
    <h2>이 책은 { bookName }입니다.</h2> <span onClick={ () => { setBookName ('자바의 정석')}}> Click Change Book Name </span>
    <h3>이 책은 총 { bookPage } 페이지 입니다.</h3> <span onClick={ () => { setBookPage ('295')}}> Click Change Book Page </span>
    </div>
    <span> { likeBtn } </span> <span onClick={() => { setLikeBtn ( likeBtn + 1) }}>👍</span> 
    </>
   );
}

export default Box
;