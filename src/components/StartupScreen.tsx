import React from 'react';
import { useState } from 'react';
import "./StartupScreen.css";



const StartupScreen = ({ onSelect }: { onSelect: (source: string) => void }) =>{
    const [customURL, setCustomURL] = useState('');

return (
    <div className='StartupScreen'>
        <div className='preloaded-APIs'>
            <a className='preloaded-APIs-button' href='#' onClick={() => onSelect("API#1")}>API #1</a>
            <a className='preloaded-APIs-button' href='#' onClick={() => onSelect("API#2")}>API #2</a>
            <a className='preloaded-APIs-button' href='#' onClick={() => onSelect("API#3")}>API #3</a>
        </div>
        <div className='Custom-API'>
            <input type='text' className='API-url-input' value={customURL} placeholder='https://picsum.photos/v2/list' onChange={(e) => setCustomURL(e.target.value)}></input><button onClick={() => onSelect(customURL)}>Button</button>
        </div>
    </div>
);
};

export default StartupScreen;
