import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { setAuthTokenState, setUserRole } from '@store/auth/auth.slice';
import { UserCridentials, userDataForLogout } from '@components/vote-summary/types';
import { showToastMessage, ToastType } from '@components/toast-message/toast-message';
import { routeForLogout, routeForLogin, Roles, ROLE_KEY } from '@app/store/auth/auth.constants';
import { TOKEN_KEY } from '@app/store/auth/auth.constants';
import { ToastIds } from '@components/toast-message/toast-message.constants';
import { setAppLoading } from '@store/app/app.slice';

export const sendUserCredentials = async (credentials: UserCridentials) => {
    const errorMessage = credentials.route===routeForLogin ? 'Nem létező belépési adatokat adtál meg!' : 'Hiba a szerveren, lépj kapcsolatba az adminokkal! (Plato és Melkor)';
    return fetch(credentials.route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: credentials.email, password: credentials.password})
    })
      .then(data => {
        if (data.status===401 || data.status===400) {
          showToastMessage(errorMessage, toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable, ToastType.Error);
          return false;
        }
        return data.json();
      }).catch(()=>{
        showToastMessage('Hiba a szerveren, lépj kapcsolatba az adminokkal! (Plato és Melkor)', toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable, ToastType.Error);
        return false;
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
        showToastMessage('A szerverben hiba lépett fel, de a böngészőből töröltük az adataidat!', toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable, ToastType.Error);
      }
      return Promise.resolve();
    })
};

export const sendUserCredentialsThunk = createAsyncThunk(
    'auth/loginAndRegistration', 
    async (credentials: UserCridentials, {dispatch}) => {
        dispatch(setAppLoading(true));
        const response = await sendUserCredentials(credentials);
        if (!response) {
          dispatch(setAppLoading(false));
        } else {
          dispatch(setAuthTokenState(response.token));
          dispatch(setAppLoading(false));
          dispatch(setUserRole(Roles.Admin));
        }
        return response;
    }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout', 
  async (userdataForLogout: userDataForLogout, {dispatch}) => {
    dispatch(setAppLoading(true));
    const response = await logout(userdataForLogout);
    //todo: implement -> if there is no response, because the server cannot be reached we log out the user locally
    dispatch(setAuthTokenState(null));
    sessionStorage.setItem(ROLE_KEY, Roles.Visitor);
    dispatch(setUserRole(Roles.Visitor));
    sessionStorage.removeItem(TOKEN_KEY);
    dispatch(setAppLoading(false));
    return response;
  }
);
