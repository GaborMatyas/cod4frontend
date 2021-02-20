import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/form/form';
import { ROUTE_PATHS } from '@router/routes';
import { FormTypes } from '@components/form/constants';
import { LoginProps, RegistrationProps } from './auth.page.constants';
import { selectAppLoading } from '@store/app/app.selectors';
import Loader from '@components/loader/loader';
import Logo from '@components/logo/logo'
import { useSelector } from 'react-redux';

import './auth.page.scss';

type Props = {
    title: string;
    formClass: FormTypes;
    question: string;
    smallButtonText: string;
}

const AuthPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const isAppLoading = useSelector(selectAppLoading);
    const [isLoginPage, setLoginpage] = useState(true);
    const props: Props = isLoginPage ? LoginProps : RegistrationProps;

    return (
        <>
            <div className="container-background">
                {isAppLoading ? <Loader /> : null}
                <div className="login-container">
                    <div className="title-container">
                        <Logo />
                        <h1 className="title">{props.title}</h1>
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
        </>
    );
};

export default AuthPage;
