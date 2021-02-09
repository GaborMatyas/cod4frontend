import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/form/form';
import { ROUTE_PATHS } from '@router/routes';

import './login.page.scss';

const LoginPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <div className="title-container">
                <div className="login-logo"></div>
                <h1 className="title">Bejelentkezés</h1>
            </div>

            <Form
                classNameString="login-form"
                username={email}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword} />

            <div className="change-page">
                <span className="question">Még nem vagy besorozva?</span>
                <Link to={ROUTE_PATHS.Register}>
                    <button>Regisztrálj&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
