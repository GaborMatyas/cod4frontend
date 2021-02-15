import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { setAuthTokenState } from '@store/auth/auth.slice';
import { Token, UserCridentials } from '@components/vote-summary/types';
import { showErrorToastMessage } from '@components/toast-message/toast-message';

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
          showErrorToastMessage('Nem létező belépési adatokat adtál meg!', toast.POSITION.TOP_RIGHT);
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
