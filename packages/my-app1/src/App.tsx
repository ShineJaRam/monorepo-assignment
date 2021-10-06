import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Learn Monorepo in my-app1
        <br />
        <br />
        my-app1에서의 변경사항을 기록합니다.
        <br />
        lerna versioning을 실습 중입니다.
      </header>
    </div>
  );
}

export default App;
