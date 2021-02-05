import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Vote } from '@components/vote-summary/types'
import { votesInitialState } from './state';
import { fetchVotesThunk } from '@store/votes/votes.thunk';

interface UserAndDate {
    currentUserName: string;
    date: string;
    avatarURL: string;
}

const votesSlice = createSlice({
    name: 'votes',
    initialState: votesInitialState,
    reducers: {
        togglehUserVoteWithCheckbox: (state, {payload}: PayloadAction<UserAndDate>) => {
            state.votes.forEach(voteObject => {
                if (voteObject.date===payload.date) {
                    const usersVotedExcludedCurrentUser = voteObject.members.filter(member => member.username!==payload.currentUserName);
                    if (usersVotedExcludedCurrentUser.length === voteObject.members.length) {
                        voteObject.members.push({username: payload.currentUserName, avatarURL: payload.avatarURL});
                    } else {
                        voteObject.members = usersVotedExcludedCurrentUser;
                    }
                }
            });
        },
        fetchVotesFailed: (state, {payload}: PayloadAction<string>) => {
            state.status = 'failed';
        }
    },
    extraReducers: {
        [fetchVotesThunk.fulfilled.type]: (state, action: PayloadAction<Array<Vote>>) => {
            state.votes=action.payload;
            state.status='fetched';
        },
        [fetchVotesThunk.pending.type]: (state) => {
            state.status='loading';
        },
        [fetchVotesThunk.rejected.type]: (state) => {
            state.status='failed';
        }
    }
});

export const {
    togglehUserVoteWithCheckbox,
    fetchVotesFailed
} = votesSlice.actions;

export default votesSlice.reducer;
