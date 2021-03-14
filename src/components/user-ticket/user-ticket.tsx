import React from 'react';
import { useSelector } from 'react-redux';

import { selectUserState } from '@store/auth/auth.selectors';

import './user-ticket.scss'

const UserTicket = () => {
    const user = useSelector(selectUserState);
    return (
        <div className="user-ticket">
            <span className="username">{user.nickName}</span>
            <div
                className="avatar"
                style={{
                    background: `rgba(53, 53, 63, 0.8) url(${user.avatarURL}) center center no-repeat`,
                    backgroundSize: 'contain'
                }} />
        </div>
    )
}

export default UserTicket;
