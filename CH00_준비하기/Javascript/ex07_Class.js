/*
ES6 이후 class 가 추가됐다.
그 전에는 {} 객체 형태로 사용되었다.
 */

class Rectangle {

  // 생성자
  // 필드를 따로 선언하지 않고 this로 생성자의 인자값을 받아서 초기화
  constructor (heigth, width) {
    this.heigth = heigth;
    this.width = width;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Method
  calcArea () {
    return this.heigth * this.width;
  }

}

const p = new Rectangle( 3, 7 );
const square = new Rectangle ( 10, 10 );
square.area();