import React from 'react';
import { useSelector } from 'react-redux';

import Avatar from '@components/common/avatar/avatar';
import { selectUserState } from '@app/store/auth/auth.selectors';
import LogoutIcon from '@assets/img/logout.svg';

import './header.scss';

const Header = () =>{
    const user = useSelector(selectUserState);
    return(
        <header id='page-header'>
            <div className="user-container">
                <div 
                    className="avatar" 
                    style={{background: `rgba(8, 97, 44, 0.2) url(${user.avatarURL}) center center no-repeat`, 
                    backgroundSize: 'contain'
                }}/>
                <span className="username">{user.nickName}</span>
            </div>
            <div className="main-title"/>
            <LogoutIcon/>
        </header>
    )
}

export default Header;
