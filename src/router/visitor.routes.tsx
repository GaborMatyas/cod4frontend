import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE_PATHS } from './routes';
import AuthPage from '@app/pages/login/auth.page';

const VisitorRoutes = (): JSX.Element => (
    <Switch>
        <Route path={ROUTE_PATHS.Auth} exact>
            <AuthPage />
        </Route>
        <Redirect to={ROUTE_PATHS.Auth} />
    </Switch>
);

export default VisitorRoutes;
