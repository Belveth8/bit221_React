import React, { Component } from 'react'

export default class Clock extends Component {

  constructor (props) {
    super(props)
    this.state = { date : new Date() };

  }

  // 최초 렌더링 되었을 때, 구현될 함수
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);

  }

  componentWillUnmount() {
    clearInterval (this.timerID);

  }

  // state new Date 값을 변경시켜줄 함수
  tick () {
    this.setState(
      { date : new Date() }
    );
  }

  render() {
    return (
      <div>
        <h1> Hello World ! </h1>
        <h2> It is { this.state.date.toLocaleTimeString() } </h2> 
         </div>
    )
  }
}
