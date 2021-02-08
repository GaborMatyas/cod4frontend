import React, { useState } from 'react';
import { useForm } from "react-hook-form";

import ErrorMessage from './error-message';
import SubmitButton from '@app/components/common/button/submit-button';
import { nameValidation, passwordValidation } from './form.utils';

interface FormProps {
    classNameString: string;
    onSubmit: any;
    username: string;
    setUsername: Function;
    password: string;
    setPassword: Function;
}

type FormData = {
    username: string;
    password: string;

};

const Form = ({ classNameString, onSubmit, username, setUsername, password, setPassword }: FormProps): JSX.Element => {
    const nameValidationErrors = nameValidation(username);
    const passwordValidationErrors = passwordValidation(password);
    const formIsValid = nameValidationErrors.length === 0 && passwordValidationErrors.length === 0;
    const [nameTouched, setNameTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const handleNameChange = (value: string) => {
        if (!nameTouched) {
            setNameTouched(true);
        }
        setUsername(value);
    }

    const handlePasswordChange = (value: string) => {
        if (!passwordTouched) {
            setPasswordTouched(true);
        }
        setPassword(value);
    }

    return (
        <form className={classNameString} onSubmit={onSubmit}>

            <div className="input-group">
                <label htmlFor="username">Felhasználónév</label>
                <input
                    type="text"
                    name="username"
                    placeholder="Mi a neved a harcmezőn?"
                    value={username}
                    onChange={e => { handleNameChange(e.target.value) }} />
                {(classNameString === 'login-form' && nameTouched) ? <ErrorMessage fieldName='username' errors={nameValidationErrors} /> : null}
            </div>

            <div className="input-group">
                <label htmlFor="password">Jelszó</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Add meg a jelszavad"
                    value={password}
                    onChange={e => handlePasswordChange(e.target.value)} />
                {(classNameString === 'login-form' && passwordTouched) ? <ErrorMessage fieldName='password' errors={passwordValidationErrors} /> : null}
            </div>

            <SubmitButton className='login-button' text="Bejelentkezés" disabled={!formIsValid} />
        </form>
    )
};

export default Form;
