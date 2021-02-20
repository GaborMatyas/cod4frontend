import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../root.reducer';
import { User } from './auth.constants';

export const selectUserState = (state: RootState): User => state.auth;

export const selectUserAvatarURL = createSelector(
    selectUserState,
    state => state.avatarURL
);
