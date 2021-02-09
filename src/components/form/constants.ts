export const maxStringLength = 20;
export const minNameLength = 3;
export const minPasswordLength = 8;

export enum ValidationRequirementsEnum {
    REQUIRED = 'required',
    MIN_LENGTH = 'minLength',
    MAX_LENGTH = 'maxLength',
    PATTERN = 'pattern'
};
