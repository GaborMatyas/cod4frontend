import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from './constants'
import { userInitialState, fetchedUserData } from './state';

const userSlice = createSlice({
    name: 'auth',
    initialState: userInitialState,
    reducers: {
        login: (state, {payload}: PayloadAction<User>) => {
            state.id = fetchedUserData.id;
            state.nickName = fetchedUserData.nickName;
        }
    }
});

export const {
    login
} = userSlice.actions;

export default userSlice.reducer;
