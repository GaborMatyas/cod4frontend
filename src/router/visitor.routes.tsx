import React from 'react';
import { Redirect, Route,Switch } from 'react-router-dom';

import { ROUTE_PATHS } from './routes';
import LoginPage  from '@pages/login/login.page';
import RegisterPage  from '@pages/register/register.page';


const VisitorRoutes = (): JSX.Element => (
    <Switch>
        <Route path={ROUTE_PATHS.Login} exact>
            <LoginPage />
        </Route>
        <Route path={ROUTE_PATHS.Register} exact>
            <RegisterPage />
        </Route>
        <Redirect to={ROUTE_PATHS.Login} />
    </Switch>
);

export default VisitorRoutes;
