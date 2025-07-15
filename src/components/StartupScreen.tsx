import React from 'react';
import "./StartupScreen.css";

const StartupScreen = () =>{
  return (
    <div className='StartupScreen'>
        <div className='preloaded-APIs'>
            <a className='preloaded-APIs-button' href='#'>API #1</a>
            <a className='preloaded-APIs-button' href='#'>API #2</a>
            <a className='preloaded-APIs-button' href='#'>API #3</a>
        </div>
        <div className='Custom-API'>
            <input type='text' className='API-url-input' placeholder='https://picsum.photos/v2/list'></input><button>Button</button>
        </div>

    </div>
  );
};

export default StartupScreen;
