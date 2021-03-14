import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APP_STATE_DEFAULT } from '@store/app/app.state';

const appSlice = createSlice({
    name: 'app',
    initialState: APP_STATE_DEFAULT,
    reducers: {
        toggleSidePanel(state): void {
            state.sidePanelOpened = !state.sidePanelOpened;
        },
        setAppLoading(state, action: PayloadAction<boolean>): void {
            state.appLoading = action.payload;
        }
    }
});

export type AppAction = ReturnType<typeof appSlice.actions[keyof typeof appSlice.actions]>;

export const {
    setAppLoading,
    toggleSidePanel,
} = appSlice.actions;

export default appSlice.reducer;
