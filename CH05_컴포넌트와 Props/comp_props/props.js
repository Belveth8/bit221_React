/**
 *  컴포넌트 입력 (Props)
 *  : ' 속성 '
 * 읽기 전용
 * 
 * JavaScript 객체다.  { }
 */

function App (props) {
  return (
    <Profile name = 'Tom' intro='안녕' hit= {100} />
  )
}

function Profile (props) { //  props 를 쓰기 싫다 그럼 속성 하나하나 중괄호로 묶어 쓰면된다.
                          // ({name, intro, hit}) 그럼 밑에서 호출할 땐, props 안 써도 됨
  return (
    <>
      <h2>{ props.name } 의 블로그 입니다. </h2>
      <p>{ props.intro }</p>
      <hr />
      <span>{ props.hit } </span>
    </>
  );
}