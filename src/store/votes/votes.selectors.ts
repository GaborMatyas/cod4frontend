import { RootState } from '@store/root.reducer';
import { Votes } from '@components/vote-summary/types';

export const selectVoteState = (state: RootState): Votes => state.votes;
