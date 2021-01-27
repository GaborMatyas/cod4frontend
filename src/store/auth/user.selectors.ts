import { RootState } from '../root.reducer';
import { User } from './constants';

export const selectUserState = (state: RootState): User => state.auth;
