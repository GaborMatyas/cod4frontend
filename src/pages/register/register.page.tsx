import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/form/form';
import { ROUTE_PATHS } from '@router/routes';
import { FormTypes } from '@components/form/constants';

import './register.page.scss';

const RegisterPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <div className="title-container">
                <div className="login-logo"></div>
                <h1 className="title">Regisztráció</h1>
            </div>

            <Form
                classNameString={FormTypes.REGISTER_PAGE}
                username={email}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword} />

            <div className="change-page">
                <span className="question">Már be vagy sorozva?</span>
                <Link to={ROUTE_PATHS.Login}>
                    <button>Bejelentkezés&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
                </Link>
            </div>
        </div>
    );
};

export default RegisterPage;
