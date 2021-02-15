import React from 'react';

import { ValidationRequirementsEnum } from './constants';

interface ErrorMessageProps {
    errors: string[];
    maxStringLength: number;
    minStringLength: number;
};

import './form-error-message.scss';

const spanElement = (textMessage: string) => (
    <p className='error-message'>{textMessage}</p>
)

const ErrorMeassage = ({ errors, minStringLength, maxStringLength }: ErrorMessageProps) => {
    if (errors.length) {
        switch (errors[0]) {
            case ValidationRequirementsEnum.REQUIRED:
                return spanElement('A mező kitöltése kötelező');
            case ValidationRequirementsEnum.MIN_LENGTH:
                return spanElement(`Min ${minStringLength} karakternek kell lennie`);
            case ValidationRequirementsEnum.MAX_LENGTH:
                return spanElement(`Max ${maxStringLength} karakternek kell lennie`);
            case ValidationRequirementsEnum.PATTERN:
                return spanElement('Csak számokat, ékezet nélküli kis- és nagybetűket és alulvonást használhatsz');
            default:
                return null;
        }
    }

    return null;
}

export default ErrorMeassage;
