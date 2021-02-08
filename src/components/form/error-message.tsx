import React from 'react';

interface ErrorMessageProps {
    fieldName: string,
    errors: string[]
};

import './error-message.scss';

const ErrorMeassage = ({ fieldName, errors }: ErrorMessageProps) => {
    if (fieldName === 'username') {
        if (errors.length) {
            switch (errors[0]) {
                case "required":
                    return <p className='error-message'>A mező kitöltése kötelező</p>;
                case "minLength":
                    return <p className='error-message'>A nevednek min 3 karakternek kell lennie</p>;
                case "maxLength":
                    return <p className='error-message'>A nevednek max 20 karakternek kell lennie</p>;
                case "pattern":
                    return <p className='error-message'>Csak számokat, ékezet nélküli kis- és nagybetűk és alulvonást használhatsz</p>;
                default:
                    return null;
            }
        }
    }

    else if (fieldName === 'password') {
        if (errors.length) {
            switch (errors[0]) {
                case "required":
                    return <p className='error-message'>A mező kitöltése kötelező</p>;
                case "minLength":
                    return <p className='error-message'>A nevednek min 8 karakternek kell lennie</p>;
                case "maxLength":
                    return <p className='error-message'>A jelszónak max 20 karakternek kell lennie</p>;
                case "pattern":
                    return <p className='error-message'>Csak számokat, ékezet nélküli kis- és nagybetűk és alulvonást használhatsz</p>;
                default:
                    return null;
            }
        }
    }

    return null;
}


export default ErrorMeassage;