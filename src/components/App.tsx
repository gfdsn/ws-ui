import React from 'react';
import logo from '../assets/logo.svg';
import './styles/App.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import useWebSocket from 'react-use-websocket';

function App() {
  
  return (
    <>
      <Header />
      <div className="App">
        <header className="App-header"> 
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <Link to={`/room/1`}>Room 1</Link>
            </li>
            <li>
              <Link to={`/room/2`}>Room 2</Link>
            </li>
            <li>
              <Link to={`/room/3`}>Room 3</Link>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
}

export default App;
