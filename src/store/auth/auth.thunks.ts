import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { setAuthTokenState, setUserRole } from '@store/auth/auth.slice';
import { UserCridentials, userDataForLogout } from '@components/vote-summary/types';
import { showErrorToastMessage } from '@components/toast-message/toast-message';
import { routeForLogout, routeForLogin, Roles, ROLE_KEY } from '@store/auth/constants';
import { TOKEN_KEY } from '@store/auth/constants';
import { ToastIds } from '@components/toast-message/toast-message.constants';

export const sendUserCredentials = async (credentials: UserCridentials) => {
    const errorMessage = credentials.route===routeForLogin ? 'Nem létező belépési adatokat adtál meg!' : 'A regisztráció nem sikerült, hiba a szerveren, lépj kapcsolatba az adminokkal!';
    return fetch(credentials.route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    })
      .then(data => {
        if (data.status===401 || data.status===400) {
          showErrorToastMessage(errorMessage, toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable );
        }
        return data.json();
      })
};

export const logout = async (userdataForLogout: userDataForLogout) => {
  return fetch(routeForLogout, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': userdataForLogout.token,
    },
    body: JSON.stringify({userID: userdataForLogout.userID})
  })
    .then(data => {
      if (data.status===401 || data.status===400) {
        showErrorToastMessage('A szerverben hiba lépett fel, de a böngészőből töröltük az adataidat!', toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable);
      }
      return Promise.resolve();
    })
};

export const sendUserCredentialsThunk = createAsyncThunk(
    'auth/loginAndRegistration', 
    async (credentials: UserCridentials, {dispatch}) => {
        const response = await sendUserCredentials(credentials);
        dispatch(setAuthTokenState(response.token));
        return response;
    }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout', 
  async (userdataForLogout: userDataForLogout, {dispatch}) => {
    const response = await logout(userdataForLogout);
    dispatch(setAuthTokenState(null));
    sessionStorage.setItem(ROLE_KEY, Roles.Visitor);
    dispatch(setUserRole(Roles.Visitor));
    sessionStorage.removeItem(TOKEN_KEY);
    return response;
  }
);
