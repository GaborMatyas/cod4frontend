import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store/root.reducer';
import { Votes } from '@components/vote-summary/types';
import { votesInitialStateInterface } from '@store/votes/state';

export const selectVoteState = (state: RootState): votesInitialStateInterface => state.votes;

export const selectVotesStatus = createSelector(
    selectVoteState,
    state => state.status
);
