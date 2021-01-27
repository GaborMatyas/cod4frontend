import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Votes } from '@components/vote-summary/types'
import { votesInitialState, fetchedVotes } from './state';

const votesSlice = createSlice({
    name: 'votes',
    initialState: votesInitialState,
    reducers: {
        fetch: (state, {payload}: PayloadAction<Votes>) => {
            state.votes = fetchedVotes.votes;
        }
    }
});

export const {
    fetch: fetchVotes
} = votesSlice.actions;

export default votesSlice.reducer;
