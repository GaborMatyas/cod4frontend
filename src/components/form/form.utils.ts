import { ValidationRequirementsEnum } from './constants';

export const validation = (value: string, minLength: number, maxLength: number) => {
    const errors: Array<string> = [];
    if (value.trim() === '') {
        errors.push(ValidationRequirementsEnum.REQUIRED);
    }
    if (value.trim().length < minLength) {
        errors.push(ValidationRequirementsEnum.MIN_LENGTH);
    }
    if (value.trim().length > maxLength) {
        errors.push(ValidationRequirementsEnum.MAX_LENGTH);
    }
    //TODO: use the commented code once the username will be used for login
    //instead of the email address

    // if (!(/^[a-zA-Z0-9_]+$/.test(value.trim()))) {
    //     errors.push(ValidationRequirementsEnum.PATTERN);
    // }
    return errors;
}
