import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import ErrorMessage from './form-error-message';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import SubmitButton from '@app/components/common/button/submit-button';
import { validation } from './form.utils';
import { maxStringLength, minNameLength, minPasswordLength, FormTypes } from './constants';
import { routeForLogin, routeForRegistration } from '@store/auth/constants';

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

    const [nameTouched, setNameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const dispatch = useDispatch();

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
                    onChange={e => { handleChange(e.target.value, nameTouched, setNameTouched, setUsername) }} />
                {
                    nameTouched ?
                        <ErrorMessage errors={nameValidationErrors} minStringLength={minNameLength} maxStringLength={maxStringLength} /> :
                        null
                }
            </div>

            <div className="input-group">
                <label htmlFor="password">Jelszó</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Add meg a jelszavad"
                    value={password}
                    onChange={e => { handleChange(e.target.value, passwordTouched, setPasswordTouched, setPassword) }} />
                {
                    passwordTouched ?
                        <ErrorMessage errors={passwordValidationErrors} minStringLength={minPasswordLength} maxStringLength={maxStringLength} /> :
                        null
                }
            </div>

            <SubmitButton className={`${classNameString} submit-button`} text="Bejelentkezés" disabled={!formIsValid} />
        </form>
    )
};

export default Form;
