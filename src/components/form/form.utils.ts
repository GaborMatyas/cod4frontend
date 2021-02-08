export const nameValidation = (username: string) => {
    const errors: Array<string> = [];
    if (username.trim() === '') {
        errors.push('required');
    }
    if (username.trim().length < 3) {
        errors.push('minLength');
    }
    if (username.trim().length > 20) {
        errors.push('maxLength');
    }
    if (!(/^[a-zA-Z0-9_]+$/.test(username.trim()))) {
        console.log( 'regex test', /^[a-zA-Z0-9_]+$/.test(username.trim()));
        errors.push('pattern');
    }
    return errors;
}

export const passwordValidation = (username: string) => {
    const errors: Array<string> = [];
    if (username.trim() === '') {
        errors.push('required');
    }
    if (username.trim().length < 8) {
        errors.push('minLength');
    }
    if (username.trim().length > 20) {
        errors.push('maxLength');
    }
    if (!(/^[a-zA-Z0-9_]+$/.test(username.trim()))) {
        errors.push('pattern');
    }
    return errors;
}