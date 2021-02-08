import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { userInitialState } from './state';
import { sendUserCredentialsThunk } from '@store/auth/auth.thunks';
import { TOKEN_KEY } from '@store/auth/constants';


const notify = () => toast.error("Hiba: A szerver valószínűleg nem elérhető!", {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 8000
});

const userSlice = createSlice({
    name: 'auth',
    initialState: userInitialState,
    reducers: {
        setAuthTokenState: (state, {payload}: PayloadAction<string>) => {
            if(payload !==undefined && payload !== 'undefined'){
                state.token=payload;
            }
        },
    },
    extraReducers: {
        [sendUserCredentialsThunk.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
            sessionStorage.setItem(TOKEN_KEY, payload);
        },
        [sendUserCredentialsThunk.rejected.type]: (state, {payload}: PayloadAction<string>) => {
            notify();
        },
    }
});

export const {
    setAuthTokenState
} = userSlice.actions;

export default userSlice.reducer;
