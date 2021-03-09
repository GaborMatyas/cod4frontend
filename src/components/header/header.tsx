import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navbar from '@components/navbar/navbar';
import { selectUserState } from '@store/auth/auth.selectors';
import LogoutIcon from '@assets/img/logout.svg';

import './header.scss';
import { logoutUserThunk } from '@app/store/auth/auth.thunks';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserState);
    return (
        <header id='page-header'>
            <div className="head-line">
                <div className="mw4logo"><i></i></div>
                <div className="user-container">
                    <span className="username">{user.nickName}</span>
                    <div
                        className="avatar"
                        style={{
                            background: `rgba(53, 53, 63, 0.8) url(${user.avatarURL}) center center no-repeat`,
                            backgroundSize: 'contain'
                        }} />
                </div>
            </div>
            <Navbar />
            <div className="logout" onClick={() => dispatch(logoutUserThunk({
                userID: user.id.toString(),
                token: user.token
            }))}>
                {/* <LogoutIcon /> */}
                <button className="logout-button">EXIT</button>
            </div>
            {/* <div className="main-title" /> */}
        </header >
    )
}

export default Header;
