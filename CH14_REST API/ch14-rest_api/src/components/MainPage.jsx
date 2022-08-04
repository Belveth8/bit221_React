import React from 'react'
import styled from 'styled-components'

/** styled-components
 * : CSS 문법을 그대로 사용
 *   결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈소스 라이브러리
 */

const Wrapper = styled.div`
  padding: 1em;
  background: crimson;
  border-radius: 50%;
`;

const MyButton = styled.h1`
  background-color: yellowgreen;
  color: #eee;
  padding: 3px;
  border-radius: 10px;
  border: 1px solid white;
`;


function MainPage() {
  return (
    <Wrapper>
      <div>MainPage</div>
      <MyButton>MyButton</MyButton>
    </Wrapper>
  )
}

export default MainPage