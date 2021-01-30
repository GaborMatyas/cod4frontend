import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Votes } from '@components/vote-summary/types'
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
        [fetchVotesThunk.fulfilled]: (state, {payload}) => {
            state.votes=payload;
        }
    }
});

export const {
    fetchVotesSuccess,
    fetchVotesFailed
} = votesSlice.actions;

export default votesSlice.reducer;
