import React from 'react';

import './submit-button.scss';

// interface ButtonProps {
//     className: string,
//     text: string,
//     handleClick: Function
// }

// const Button = ({className, text, handleClick}: ButtonProps) =>(
//     <button 
//         className={className} onClick={(e)=>handleClick(e)}>{text}</button>
// )
interface SubmitButtonProps {
    className: string,
    text: string,
    disabled: boolean
}

const SubmitButton = ({className, text, disabled}: SubmitButtonProps) =>(
    <button className={className} type="submit" disabled={disabled} >
            {text}
    </button>
)

export default SubmitButton;
