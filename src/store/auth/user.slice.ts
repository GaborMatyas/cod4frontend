import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from './constants'
import { userInitialState } from './state';

const userSlice = createSlice({
    name: 'auth',
    initialState: userInitialState,
    reducers: {
        login: (state, {payload}: PayloadAction<User>) => {
            state.id = payload.id;
            state.nickName = payload.nickName;
        }
    }
});

export const {
    login
} = userSlice.actions;

export default userSlice.reducer;
