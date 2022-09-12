// import logo from './logo.svg';
import './App.css';
import React from "react" // add
import Nav from "./components/Nav/Nav.jsx";
import { Routes } from "react-router-dom";
import Keyboard from "./components/Keyboard/Keyboard";
import s from  './components/Nav/Nav.css';

function App() {
  return (
    <div> 
      <Nav className={`${s.nav}`}/>
          <Routes exact path={'/'} component={Keyboard}/>
          <p>APP</p>
                
    </div>


   /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div> */
  );
}

export default App;
