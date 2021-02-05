import React from 'react';

interface AvatarProps {
    avatarURL: string;
}

const Avatar = (avatarURL: AvatarProps) => (
    <div 
        className="avatar" 
        style={{
            background: `rgba(8, 97, 44, 0.2) url(${avatarURL}) center center no-repeat`, 
            backgroundSize: 'contain'
        }}/>
)

export default Avatar;