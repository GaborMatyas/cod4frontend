import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectUserState } from '@store/auth/auth.selectors';
import { logoutUserThunk } from '@app/store/auth/auth.thunks';
import { ROUTE_PATH_SUMMARY } from '@router/routing-path.constants';

import './menu.scss';

const Menu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserState);
    return (
        <nav className="menu">
            <ul className="menu-items">
                <li className="menu-item">
                    <NavLink to={`/${ROUTE_PATH_SUMMARY}`} activeClassName="selected">
                        Szavazás
                    </NavLink>
                </li>
                <li className="menu-item">
                    <button>
                        Csütörtök<span id="exclamation-mark">!</span>
                    </button>
                </li>
                <li className="menu-item">
                    <button onClick={() => dispatch(logoutUserThunk({
                        userID: user.id.toString(),
                        token: user.token
                    }))}>
                        Kijelentkezés
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
