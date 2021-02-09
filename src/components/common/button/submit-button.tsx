import React from 'react';

import './submit-button.scss';
interface SubmitButtonProps {
    className: string,
    text: string,
    disabled: boolean
}

const SubmitButton = ({ className, text, disabled }: SubmitButtonProps) => (
    <button className={className} type="submit" disabled={disabled} >
        {text}
    </button>
)

export default SubmitButton;
