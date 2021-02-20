import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';

import rootReducer from './root.reducer'

const middlewares: Array<Middleware> = [...getDefaultMiddleware()];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger({
        collapsed: true
    }));
}

export default configureStore({
  reducer: rootReducer,
  middleware: middlewares
});
