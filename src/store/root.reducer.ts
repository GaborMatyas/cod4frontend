// import { connectRouter } from 'connected-react-router';
import { combineReducers, ThunkDispatch} from '@reduxjs/toolkit';

import voteReducer from './votes/votes.slice';

const rootReducer = combineReducers({
    votes: voteReducer,
    // auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootActions = Parameters<typeof rootReducer>[1];

export default rootReducer;
