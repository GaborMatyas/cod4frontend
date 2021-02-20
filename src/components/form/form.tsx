import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import ErrorMessage from './form-error-message';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import SubmitButton from '@components/submit-button/submit-button';
import { validation } from './form.utils';
import { maxStringLength, minNameLength, minPasswordLength, FormTypes } from './constants';
import { routeForLogin, routeForRegistration } from '@app/store/auth/auth.constants';
import VisibilityONIcon from '@assets/img/password-visibility-on.svg';
import VisibilityOFFIcon from '@assets/img/password-visibility-off.svg';

import './form.scss'

interface FormProps {
    classNameString: string;
    username: string;
    setUsername: Function;
    password: string;
    setPassword: Function;
}

const Form = ({ classNameString, username, setUsername, password, setPassword }: FormProps): JSX.Element => {
    const nameValidationErrors = validation(username, minNameLength, maxStringLength);
    const passwordValidationErrors = validation(password, minPasswordLength, maxStringLength);

    const formIsValid = nameValidationErrors.length === 0 && passwordValidationErrors.length === 0;
    const url = (classNameString === FormTypes.LOGIN_PAGE) ? routeForLogin : routeForRegistration;
    const submitButtonText = (classNameString === FormTypes.LOGIN_PAGE) ? 'Bejelentkezés' : 'Regisztráció';

    const [isNameTouched, setNameTouched] = useState(false);
    const [isPasswordTouched, setPasswordTouched] = useState(false);
    const [isPasswordVisible, setPasswordVisibility] = useState(false);
    const [isCapsLockOn, setCapsLockOn] = useState(false);

    const dispatch = useDispatch();

    const handleCapsLockState = (keyEvent: React.KeyboardEvent<HTMLInputElement>) => {
        (keyEvent.getModifierState("CapsLock")) ? setCapsLockOn(true) : setCapsLockOn(false)
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>, username: string, password: string, url: string) => {
        e.preventDefault();
        dispatch(sendUserCredentialsThunk({
            email: username,
            password,
            route: url
        }));
    };

    const handleChange = (value: string, isTouched: boolean, setTouched: Function, setData: Function) => {
        if (!isTouched) {
            setTouched(true);
        }
        setData(value);
    }

    return (
        <form className={`form ${classNameString}`} onSubmit={(e) => handleSubmit(e, username, password, url)}>

            <div className="input-group">
                <label htmlFor="username">Felhasználónév</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Mi a neved a harcmezőn?"
                    value={username}
                    onChange={e => { handleChange(e.target.value, isNameTouched, setNameTouched, setUsername) }} />
                {
                    isNameTouched ?
                        <ErrorMessage errors={nameValidationErrors} minStringLength={minNameLength} maxStringLength={maxStringLength} /> :
                        null
                }
            </div>

            <div className="input-group">
                {isCapsLockOn ? <span className="caps-lock-error-message">A Caps Lock be van kapcsolva</span> : null}
                <label htmlFor="password">Jelszó</label>
                <input
                    type={isPasswordVisible ? 'text' : "password"}
                    name="password"
                    placeholder="Add meg a jelszavad"
                    value={password}
                    onKeyDown={(e) => handleCapsLockState(e)}
                    onChange={e => { handleChange(e.target.value, isPasswordTouched, setPasswordTouched, setPassword) }} />
                <div className="svg-wrapper" onClick={() => setPasswordVisibility(!isPasswordVisible)}>
                    {isPasswordVisible ? <VisibilityONIcon /> : <VisibilityOFFIcon />}
                </div>
                {
                    isPasswordTouched ?
                        <ErrorMessage errors={passwordValidationErrors} minStringLength={minPasswordLength} maxStringLength={maxStringLength} /> :
                        null
                }
            </div>

            <SubmitButton className={`${classNameString} submit-button`} text={submitButtonText} disabled={!formIsValid} />
        </form>
    )
};

export default Form;
