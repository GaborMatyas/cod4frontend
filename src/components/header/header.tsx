import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectUserState } from '@store/auth/auth.selectors';
import LogoutIcon from '@assets/img/logout.svg';

import './header.scss';
import { logoutUserThunk } from '@app/store/auth/auth.thunks';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserState);
    return (
        <header id='page-header'>
            <div className="user-container">
                <div
                    className="avatar"
                    style={{
                        background: `rgba(8, 97, 44, 0.2) url(${user.avatarURL}) center center no-repeat`,
                        backgroundSize: 'contain'
                    }} />
                <span className="username">{user.nickName}</span>
            </div>
            <div className="main-title" />
            <div className="logout" onClick={() => dispatch(logoutUserThunk({
                userID: user.id.toString(),
                token: user.token
            }))}>
                <LogoutIcon />
                <span>exit</span>
            </div>
        </header>
    )
}

export default Header;
