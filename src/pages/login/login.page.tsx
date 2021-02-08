import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import SubmitButton from '@app/components/common/button/submit-button';
import Form from '@components/form/form';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import { ROUTE_PATHS } from '@router/routes';
import { routeForLogin } from '@store/auth/constants';

import './login.page.scss';

const LoginPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        dispatch(sendUserCredentialsThunk({
            email,
            password,
            route: routeForLogin
        }));
    }

    return (
        <div className="login-container">
            <div className="title-container">
                <div className="login-logo"></div>
                <h1 className="title">Bejelentkezés</h1>
            </div>

            <Form
                classNameString="login-form"
                onSubmit={handleSubmit}
                username={email}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword} />

            <div className="sign-up">
                <span className="question">Még nem vagy besorozva?</span>
                <Link to={ROUTE_PATHS.Register}>
                    <button className="registration">Regisztrálj&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
