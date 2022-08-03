import React from 'react'
import Comment from './Comment'

const list = [
  {
    id : 1,
    name: 'Ken',
    comment: '안녕하세요? 루니입니다😊',
    avatarUrl: 'images/simple/2627.jpg'
  },
  {
    id : 2,
    name: 'Jane',
    comment: '안녕하세요? 크리스찬입니다🤣',
    avatarUrl: 'images/simple/6060.jpg'
  },
{
    id : 3,
    name: 'Son',
    comment: '안녕하세요? 케인입니다😁',
    avatarUrl: 'images/simple/7024.jpg'
  },
  {
    id : 4,
    name: 'Sala',
    comment: '안녕하세요? 리중딱입니다😍 누가 부들대죠? ',
    avatarUrl: 'images/simple/9912.jpg'
  },
  {
    id : 5,
    name: 'wooyoung',
    comment: '안녕하세요? 역삼역입니다😍',
    avatarUrl: 'images/simple/9634.jpg'
  }
]


function CommentList() {

  return (

    <>
      {
        list.map((data, idx) => {
          return (
            <Comment 
            name= { data.name } 
            comment = { data.comment }
            avatarUrl = { data.avatarUrl }
            />
          )
        })
      }
    </>


  )
}

export default CommentList