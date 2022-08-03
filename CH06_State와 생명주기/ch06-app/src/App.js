import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import NorificationList from './NorificationList';
import Notification from './Notification';

function App() {
  return (
    <div className="App">
        <p>
          <Clock />
        </p>
        <Notification />
    </div>
  );
}

export default App;
