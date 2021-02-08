import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import SubmitButton from '@app/components/common/button/submit-button';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import Form from '@components/form/form';
import { ROUTE_PATHS } from '@router/routes';
import { routeForRegistration } from '@store/auth/constants';

import './register.page.scss';

const RegisterPage = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e: Event) => {
        e.preventDefault();
        dispatch(sendUserCredentialsThunk({
            email,
            password,
            route: routeForRegistration
        }));
    }

    return (
        <div className="login-container">
            <div className="title-container">
                <div className="login-logo"></div>
                <h1 className="title">Regisztráció</h1>
            </div>
            <Form
                classNameString="register-form"
                onSubmit={handleSubmit}
                username={email}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword} />

            <div className="sign-up">
                <span className="question">Már be vagy sorozva?</span>
                <Link to={ROUTE_PATHS.Login}>
                    <button className="registration">Bejelentkezés&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
                </Link>
            </div>
        </div>
    );
};
//     return (
//         <div className="login-container">
//             <div className="title-container">
//                 <div className="login-logo"></div>
//                 <h1 className="title">Regisztráció</h1>
//             </div>
//             <form className="login-form">
//                 <label htmlFor="user-name">Felhasználónév</label>
//                 <input type="text" name="user-name" placeholder="Mi a neved a harcmezőn?" value={email} onChange={e => setUsername(e.target.value)}></input>
//                 <label htmlFor="password">Jelszó</label>
//                 <input type="password" name="password" placeholder="Add meg a jelszavad" value={password} onChange={e => setPassword(e.target.value)}></input>
//             </form>
//             <SubmitButton className='login-button' text="Bejelentkezés" handleClick={handleSubmit}/>
//             <div className="sign-up">
//                 <span className="question">Már be vagy sorozva?</span>
//                 <Link to={ROUTE_PATHS.Login}>
//                     <button className="registration">Bejelentkezés&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
//                 </Link>
//             </div>
//         </div>
//     );
// };

export default RegisterPage;
