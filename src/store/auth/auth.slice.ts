import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { userInitialState } from './state';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import { TOKEN_KEY, ROLE_KEY, Roles } from '@store/auth/constants';
import { showErrorToastMessage } from '@components/toast-message/toast-message';
import { ToastIds } from '@components/toast-message/toast-message.constants';

const userSlice = createSlice({
    name: 'auth',
    initialState: userInitialState,
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
            showErrorToastMessage('Hiba: A szerver valószínűleg nem elérhető!', toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable);
        }
    }
});

export const {
    setAuthTokenState,
    setUserRole
} = userSlice.actions;

export default userSlice.reducer;
