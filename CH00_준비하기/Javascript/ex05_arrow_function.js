/* 
화살표 함수
*/

function arrow () {

}
// 이거랑 간추려서 쓰는

() => {}
// 함수를 변수에 할당해서 불러 쓸 때는, const arrow () => {} 
// callback 함수와는 다른 개념
// 자바스크립트에서 함수는 기본적으로 객체로 간주되기 때문에,
// 함수의 매개변수로 함수를 넣을 수 있다
// 다른 함수의 매개변수로 넘겨준 함수를 콜백함수라고 한다.
// 어떤 이벤트가 발생될 때 매개변수로 전달된 함수로 다시 호출된다.


/*
map 함수.
map()과 ()=> {} 세트
*/
const materials =  [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
// (함수명, 인덱스) => {구현}
materials.map((e, idx) => { 
  console.log(e, idx); // out :  배열의 문자열과 문자열의 index 번호가 출력된다.
})



// 회문
let palindromes = [
  '스위스',
  '팥콩밭',
  '음악',
  '인도인',
  '필리핀',
  '다시합시다',
  '피카추',
  '여보안경안보여',
  '역삼역'
]
const contents =palindromes.filter((content) =>{
  if (content === content.split('').reverse('').join('')) { 
      // split 배열로 content를 쪼갠다. reverse로 쪼갠 배열의 str을 거꾸로 배치 . join 쪼개진 배열을 붙힌다
    return content;
  }
});
console.log(contents);