// rfce 단축키 화살표함수는 rafce ,     클래스 컴포넌트는 rcc
import React  from 'react'

const styles = {
  avatar : {
    width : '50px',
    heigth: '50px',
    borderRadius: '50%'
    }
};

function Avatar(props) {
  return (
    <>
      <img src= { props.url } alt='avatar-img' style={ styles.avatar } />
    </>
  )
}

export default Avatar