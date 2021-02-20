import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store/root.reducer';
import { AppState } from './app.state';

const selectAppState = (state: RootState): AppState => state.app;

export const selectAppLoading = createSelector(
    selectAppState,
    state => state.appLoading
);

export const selectSidePanelOpened = createSelector(
    selectAppState,
    state => state.sidePanelOpened
);
