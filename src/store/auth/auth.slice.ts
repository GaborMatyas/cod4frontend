import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { USER_INITIAL_STATE } from './auth.state';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import { TOKEN_KEY, ROLE_KEY, Roles } from '@app/store/auth/auth.constants';
import { showToastMessage, ToastType } from '@components/toast-message/toast-message';
import { ToastIds } from '@components/toast-message/toast-message.constants';

const userSlice = createSlice({
    name: 'auth',
    initialState: USER_INITIAL_STATE,
    reducers: {
        setAuthTokenState: (state, {payload}: PayloadAction<string>) => {
            if(payload !==undefined && payload !== 'undefined'){
                state.token=payload;
            }
        },
        setUserRole: (state, {payload}: PayloadAction<Roles>) => {
            state.role=payload;
        }
    },
    extraReducers: {
        [sendUserCredentialsThunk.fulfilled.type]: (state, {payload}: PayloadAction<any>) => {
            sessionStorage.setItem(TOKEN_KEY, payload.token);
            //you should replace Roles.Admin with payload.role, once you get back this from backend as response
            sessionStorage.setItem(ROLE_KEY, Roles.Admin);
        },
        [sendUserCredentialsThunk.rejected.type]: () => {
            showToastMessage('Hiba: A szerver valószínűleg nem elérhető!', toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable, ToastType.Error);
        }
    }
});

export const {
    setAuthTokenState,
    setUserRole
} = userSlice.actions;

export default userSlice.reducer;
