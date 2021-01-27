import React from 'react';

import './button.scss';

interface ButtonProps {
    className: string,
    text: string,
    handleClick: VoidFunction
}

const Button = ({className, text, handleClick}: ButtonProps) =>(
    <button className={className} onClick={()=>handleClick()}>{text}</button>
)

export default Button;
