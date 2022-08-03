/**
 *  스테이트 ( State ) ?
 *  state는 렌더링과 직접적인 연관이 있다.
 * 
 *  => 리액트 컴포넌트의 변경 가능한 데이터 ( 개발자의 저의 )
 *  => 실체 : 자바스크립의 객체 { key : value ,,,,,, }
 *  => state가 변경될 경우 컴포넌트 재렌더링 된다.
 *  
 *   클래스형 컴포넌트 : 생성자에서 state를 생성
 *   함수형 컴포넌트 : 함수에는 생성자가 없으니, 리액트 Hook을 사용하여 생성 = useState()
 */

// 클래스형 컴포넌트에서 state 생성하는 방법
class LikeButton extends React.Component {

  constructor(props) {
  super(props);
      // 생성자에서 모든 state를 한번에 정의
  this.state = { liked : false }
}
  render () {

    return (
     <>
     {
      this.setState( { liked : true } )
     }
     </> 
    )
  }
}


/**
 *    생명주기 ( Life Cycle )
 * 
 *         Mounting           ------------->           Update                --------------->             Unmouting
 *     ( 컴포넌트 생성 )                              ( 컴포넌트 수정 )                                            ( 컴포넌트 소멸 )
 * 
 *  componentDidMount()                  componentDidUpdate()                             componentWillUnmounting() 
 */