import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './root.reducer'
import { Middleware } from 'redux';
import { createLogger } from 'redux-logger';


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