/*
 * @Author: Censwin
 * @Date: 2021-10-08 23:19:50
 * @LastEditTime: 2021-10-09 00:15:32
 * @Description: 
 * @FilePath: /whale-design/src/App.tsx
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const a = "123"
if ( a == '123') {
  const a = " 123"
}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
