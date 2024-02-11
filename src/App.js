import logo from './logo.svg';
import './App.css';
import React from 'react';
import SignInSide from './components/signin';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SignInSide/>
      </header>
    </div>
  );
}

export default App;
