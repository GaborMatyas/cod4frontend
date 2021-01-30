import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Votes, Vote } from '@components/vote-summary/types'
import { votesInitialState, votesInitialStateInterface, fetchedVotes } from './state';
import { fetchVotesThunk } from '@store/votes/votes.thunk';

const votesSlice = createSlice({
    name: 'votes',
    initialState: votesInitialState,
    reducers: {
        fetchVotesSuccess: (state, {payload}: PayloadAction<Votes>) => {
            state.votes = payload.votes;
        },
        fetchVotesFailed: (state, {payload}: PayloadAction<string>) => {
            state.status = 'failed';
        }
    },
    extraReducers: {
        [fetchVotesThunk.fulfilled.type]: (state, action: PayloadAction<Array<Vote>>) => {
            state.votes=action.payload;
            state.status='fetched';
        }
    }
});

export const {
    fetchVotesSuccess,
    fetchVotesFailed
} = votesSlice.actions;

export default votesSlice.reducer;
