import React from 'react';
import h from'./Header.module.css'

const Header = () => {
    return (
        <header className={h.header}>
            <div className="container flex-box">
                <h1 className="logotype">
                    <a href="#">
                        <img src="751337_logo_512x512.png" alt="" />
                    </a>
                </h1>
                <ul className="inform flex-box">
                    <li>
                        <button>Sign in</button>
                    </li>
                    <li>
                        <button>Login in</button>
                    </li>
                </ul>
            </div>
        </header>
    );
}


export default Header;