import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APP_STATE_DEFAULT } from '@store/app/app.state';

const appSlice = createSlice({
    name: 'app',
    initialState: APP_STATE_DEFAULT,
    reducers: {
        closeSidePanel(state): void {
            state.sidePanelOpened = false;
        },
        openSidePanel(state): void {
            state.sidePanelOpened = true;
        },
        setAppLoading(state, action: PayloadAction<boolean>): void {
            state.appLoading = action.payload;
        }
    }
});

export type AppAction = ReturnType<typeof appSlice.actions[keyof typeof appSlice.actions]>;

export const {
    setAppLoading,
    closeSidePanel,
    openSidePanel,
} = appSlice.actions;

export default appSlice.reducer;
