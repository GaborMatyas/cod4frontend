import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/form/form';
import { FormTypes } from '@components/form/constants';
import { LoginProps, RegistrationProps } from './auth.page.constants';
import { selectAppLoading } from '@store/app/app.selectors';
import Loader from '@components/loader/loader';
import Logo from '@components/logo/logo'
import { useSelector } from 'react-redux';

import './auth.page.scss';

export type authPageProps = {
    title: string;
    formClass: FormTypes;
    question: string;
    smallButtonText: string;
    headline: string;
    instruction: string;
}

const AuthPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAppLoading = useSelector(selectAppLoading);
    const [isLoginPage, setLoginpage] = useState(true);
    const props: authPageProps = isLoginPage ? LoginProps : RegistrationProps;

    return (
        <>
            <div className="authpage-background-picture">
                <div className="background-gradient">
                    <div className="auth-page-big-logo" />
                    <div className="login-container-background">
                        {isAppLoading ? <Loader /> : null}
                        <div className="login-container">
                            <div className="title-container">
                                <Logo />
                                <h3 className="headline">{props.headline}</h3>
                                <span className="instruction">{props.instruction}</span>
                                <h2 className="form-title">{props.title}</h2>
                            </div>

                            <Form
                                classNameString={props.formClass}
                                username={email}
                                setUsername={setUsername}
                                password={password}
                                setPassword={setPassword} />

                            <div className="change-page">
                                <span className="question">{props.question}</span>
                                <button onClick={() => setLoginpage(!isLoginPage)}>{props.smallButtonText}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
