import React from 'react';
import "./Header.css";

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => {
return (
    <header className="header">
        <div className="title">Rapi Gallery</div>
        <div className="menu-container" onClick={onMenuClick}>
            <a href="#">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </a>
        </div>
    </header>
);
};

export default Header;
