import { combineReducers } from '@reduxjs/toolkit';

import voteReducer from './votes/votes.slice';
import authReducer from './auth/auth.slice';
import appReducer from './app/app.slice';

const rootReducer = combineReducers({
    votes: voteReducer,
    auth: authReducer,
    app: appReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootActions = Parameters<typeof rootReducer>[1];

export default rootReducer;
