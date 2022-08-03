import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';

function App() {

  // let [ now , setCal ] = useState( )
  // let [ time, setTime ] = useState()

  // setCal = setInterval ( () => { cal } , 1000 )
  // setTime = setInterval (() => {time}, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Clock />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
