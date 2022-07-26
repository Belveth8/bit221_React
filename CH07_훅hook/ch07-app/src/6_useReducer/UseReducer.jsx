/**
 *   : state 생성 및 관리 도구
 * 
 *  언제 사용?
 *   : 여러개의 하위값을 갖는 복잡한 state를 다뤄야 할 때
 * 
 *  {
 *    티져 : '존'
 *    학생 : [ ,,,, ]
 *    카운트 : 3,
 *     위치 : [ 저기, 여기, 거기], {} , {}
 *   }
 *    이런 객체의 state를 가지고 있다
 *    
 *    3가지 기본 개념요소
 *    [ Reducer ]
 *     : 컴포넌트 state 변경 
 * 
 *    [ dispath ]
 *      : 컴포넌트의 state 변경 요청
 * 
 *    [ Action ]
 *     : 컴포넌트의 state 변경 내용
 */