import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { routeForLogin, routeForRegistration } from './constants';
import { setAuthTokenState } from '@store/auth/auth.slice';
import { Token, UserCridentials } from '@components/vote-summary/types';

const notify = () => toast.error("Nem létező belépési adatokat adtál meg!", {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 8000
});

export const sendUserCredentials = async (credentials: UserCridentials) => {
    return fetch(credentials.route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    })
      .then(data => {
        if (data.status===401 || data.status===400) {
          notify();
        }
        return data.json();
      })
};

export const sendUserCredentialsThunk = createAsyncThunk(
    'auth/login', 
    async (credentials: UserCridentials, {dispatch}) => {
        const response = await sendUserCredentials(credentials);
        dispatch(setAuthTokenState(response.token));
        return (await response.token) as Token;
    }
);
