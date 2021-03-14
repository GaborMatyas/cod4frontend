import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserState } from '@store/auth/auth.selectors';
import Navbar from '@app/components/menu/menu';
import UserTicket from '@components/user-ticket/user-ticket';
import HamburgerIcon from '@components/hamburger-icon/hamburger-icon';

import './header.scss';

const Header = () => {
    const user = useSelector(selectUserState);
    return (
        <header id='page-header'>
            <div className="header-gradient">
                <div className="headline">
                    <div className="mw4logo"><i></i></div>
                    {/* <div className="user-container">
                        <span className="username">{user.nickName}</span>
                        <div
                            className="avatar"
                            style={{
                                background: `rgba(53, 53, 63, 0.8) url(${user.avatarURL}) center center no-repeat`,
                                backgroundSize: 'contain'
                            }} />
                    </div> */}
                    <HamburgerIcon />
                    <UserTicket />
                </div>
                <Navbar />
            </div>
        </header >
    )
}

export default Header;
