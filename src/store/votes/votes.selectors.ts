import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@store/root.reducer';
import { votesInitialStateInterface } from '@app/store/votes/votes.state';

export const selectVoteState = (state: RootState): votesInitialStateInterface => state.votes;

export const selectVotesArray = createSelector(
    selectVoteState,
    state => state.votes
);

export const selectVotesSnapshot = createSelector(
    selectVoteState,
    state => state.voteSnapshotToVerifyChanges
);
