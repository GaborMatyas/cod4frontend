import React from 'react';

import './navbar.scss';

const Navbar = () => (
    <nav className="navbar">
        <ul className="menu-items">
            <li className="menu-item">
                <button>
                    Szavazás
                </button>
            </li>
            <li className="menu-item">
                <button>
                    Csütörtök<span id="exclamation-mark">&nbsp;!</span>
                </button>
            </li>
            <li className="menu-item disabled">
                <button>
                    GY.I.K.
                </button>
            </li>
            <li className="menu-item disabled">
                <button>
                    Légió
                </button>
            </li>
            <li className="menu-item">
                <button>
                    Kijelentkezés
                </button>
            </li>
        </ul>
    </nav>
)

export default Navbar;
