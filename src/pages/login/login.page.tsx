import React from 'react';

import Button from '@components/common/button/button';

import './login.page.scss';

const LoginPage = () =>(
    <div className="login-container">
        <div className="title-container">
            <div className="login-logo"></div>
            <h1 className="title">Bejelentkezés</h1>
        </div>
        <form className="login-form">
            <label htmlFor="user-name">Felhasználónév</label>
            <input type="text" name="user-name" placeholder="Mi a neved a harcmezőn?"></input>
            <label htmlFor="password">Jelszó</label>
            <input type="password" name="password" placeholder="Add meg a jelszavad"></input>
        </form>
        <Button className='login-button' text="Bejelentkezés" handleClick={()=>(console.log('x'))}/>
        <div className="sign-up">
            <span className="question">Még nem vagy besorozva?</span>
            <button className="registration">Regisztrálj&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;</button>
        </div>
    </div>
)

export default LoginPage;
