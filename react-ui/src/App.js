import React from 'react';
// import logo from './logo.svg';
import Button from './Button';
import useColorSwitch from './useColorSwitch';
import './App.css';

function App() {
  const [state, handleButton1, handleButton2] = useColorSwitch();
  return (
    <div>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Button label="按钮1" onClick={handleButton1} width="180px">
        <span>啦啦啦</span>
      </Button>
      <p style={{ color: state }}>敲代码，别偷懒</p>
      <Button label="按钮2" onClick={handleButton2}>
        <span>呵呵呵</span>
      </Button>
    </div>
  );
}

export default App;
