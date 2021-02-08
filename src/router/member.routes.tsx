import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { ROUTE_PATHS } from './routes';
import VoteSummary from '@pages/vote-summary/vote-summary.page';

const MemberRoutes = (): JSX.Element => (
    <Switch>
        <Route path={ROUTE_PATHS.Summary} >
            <VoteSummary />
        </Route>
        <Redirect to={ROUTE_PATHS.Summary} />
    </Switch>
);

export default MemberRoutes;
