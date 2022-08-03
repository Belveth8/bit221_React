import React from 'react'
import { useState } from 'react'
import Avatar from './Avatar'
import Dtime from './Dtime'

function Comment(props) {
  let [ likeBtn, setLikeBtn ] = useState (0);

  return (
    <>
    <div className="comment">
      <div className="user-info container">
        {/* <img src="./tom.jpg" alt="user-img" className="avatar" /> */}
        <Avatar url= { props.avatarUrl } />
        <div className="user-info-name container">
          { props.name }
        </div>
      </div>

      <div className="commnet-txt container">
        <p>
          { props.comment }
          </p>
        <div className="comment-date">
        <Dtime />
        </div>
        <span> 좋아요 </span>
        
        <span onClick={ () =>{ setLikeBtn ( likeBtn + 1)} }>👍</span>
        
        <span> { likeBtn } </span>

      </div>
    </div>
    </>
  )
}

export default Comment