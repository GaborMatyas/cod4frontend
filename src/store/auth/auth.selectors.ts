import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../root.reducer';
import { User } from './constants';

export const selectUserState = (state: RootState): User => state.auth;

export const selectUserAvatarURL = createSelector(
    selectUserState,
    state => state.avatarURL
);
