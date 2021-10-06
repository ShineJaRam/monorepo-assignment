import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Learn Monorepo in my-app2
        <br />
        <br />
      </header>
      @commitlint/config-lerna-scopes 룰에 맞는 commit 메세지 작성을 하는 연습
      중입니다. scope에 맞는 commit message를 작성해봅니다.
    </div>
  );
}

export default App;
