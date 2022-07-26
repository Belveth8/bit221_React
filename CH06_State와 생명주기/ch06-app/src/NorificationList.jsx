import React, { Component } from 'react'
import Notification from './Notification'

const reservedNotifications = [
  { id:1, header:'알림', message:'안녕하세요? 오늘 일정을 알려드립니다.' },
  { id:2, header:'공지', message:'금일 낮 2시 반 전체회의 예정입니다.' },
  { id:3, header:'노티', message:'이제 곧 미팅이 시작됩니다.' },
  { id:4, header:'안내', message:'안녕? 오늘 일정을 알려드립니다.' },
  { id:5, header:'공지', message:'낮 2시 반 전체회의 예정입니다.' },
  { id:6, header:'알림', message:'곧 미팅이 시작됩니다.' },
  { id:7, header:'알림', message:'안녕하세? 오늘 일정을 알려드립니다.' },
  { id:8, header:'공지', message:'2시 반 전체회의 예정입니다.' },
  { id:9, header:'알림', message:'이제  미팅이 시작됩니다.' }
]

let timer;

export default class NorificationList extends Component {
  constructor(props) {
    super(props)
  
    // state 선언 및 초기화
    this.state = {
       // 내부적으로 사용할 list
       notification : [],
    }
  }

  // 클래스 컴포넌트 생명주기 함수
  componentDidMount () {
    const notis = [];

    timer = setInterval( () => {
      if( notis.length < reservedNotifications.length ) {
        // index 0 ~ 8

        // 빈 배열 얕은 복사
        const idx = notis.length;

        // notis에 오브젝트 추가 =>배열의 idx 를 복사한 copy본 idx 넣기 
        notis.push(reservedNotifications[idx])

        // 추가된 오브젝트(들)을 담고 있는 notifications 리스트가 업데이트
        this.setState({
          notification : notis
        }) // state로 생성된 객체 notification에 notis를 할당 
        
      } else {
        // 반복 종료
        clearInterval(timer);
      }

    },1000);
  }


  render() {
    return (
      <>
      {
        this.state.notification.map( (obj, idx) => {    // return 생략 가능 한데 왜그럼? map 혹은 콜백함수에서 html 태그를 리턴할 경우는 리턴으로 감싸야한다.
          return (
          <Notification key= { idx }
            id = { obj.id }
            header = { obj.header }
            message = { obj.message }
          />
          )
        })
      }
      </>
    )
  }
}
