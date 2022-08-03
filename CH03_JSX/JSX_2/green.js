// JSX

/* 
 1. 태그는 무조건 닫혀야 한다.
  <input type = 'text' />
*/


/*
2. 두개 이상의 엘리먼트는 무조건 하나의 엘리먼트로 감싸져야 한다.
*/
class App2 extends React.Component {
  render() {
    <>
    <div>
      <button>button</button>
    </div>
    </>
  }
}

/*
 3. JSX 내부에서 변수를 호출하려면 코드를 {} 로 감싸줘라
*/
class App3 extends React.Component {
  render() {
    const title = "100분 토론"

    return (
      <>
      <h1> { title } </h1>
      </>
    )
  }
}

/*
4. {} 자바스크립트 if 조건문 (x)
   : 삼합연산자 
 */
class App4 extends React.Component {
  render() {
    let flag = true;
    return (
      <div>
        {
          flag ? <p>안녕하세요</p> : <p> 쓰미마셍</p>
        }
      </div>
    )
  }
};

/*
 5. 카멜케이스 표기법
*/
class App5 extends React.Component {
  render () { // 리액트 컴포넌트를 이녀석으로 오버라이딩
    return (
      <div className="app5">
        <h1>내용</h1>
      </div>
    )
  }
}