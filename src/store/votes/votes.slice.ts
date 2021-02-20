import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Vote } from '@components/vote-summary/types'
import { votesInitialState } from './votes.state';
import { toast } from 'react-toastify';
import { showErrorToastMessage } from '@components/toast-message/toast-message';
import { fetchVotesThunk, sendVotesThunk } from '@store/votes/votes.thunk';
import { ToastIds } from '@components/toast-message/toast-message.constants';
import { setAppLoading } from '@store/app/app.slice';

interface UserAndDate {
    currentUserName: string;
    date: string;
    avatarURL: string;
}

const votesSlice = createSlice({
    name: 'votes',
    initialState: votesInitialState,
    reducers: {
        toggleUserVoteWithCheckbox: (state, {payload}: PayloadAction<UserAndDate>) => {
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
        setSnapshot: (state, {payload}: PayloadAction<Array<Array<string>>>) => {
            state.voteSnapshotToVerifyChanges = payload;
        }
    },
    extraReducers: {
        [fetchVotesThunk.fulfilled.type]: (state, action: PayloadAction<Array<Vote>>) => {
            state.votes=action.payload;
                },
        [fetchVotesThunk.pending.type]: (state) => {
        },
        [sendVotesThunk.fulfilled.type]: (state, action: PayloadAction<Array<Vote>> ) => {
            state.votes=action.payload;;
        },
        [sendVotesThunk.rejected.type]: (state) => {
            showErrorToastMessage('Hiba, ellenőrizd az elérési utat és hogy a szerver elérhető e!', toast.POSITION.TOP_RIGHT, ToastIds.ServerUnavailable);
        },
    }
});

export const {
    toggleUserVoteWithCheckbox,
    setSnapshot
} = votesSlice.actions;

export default votesSlice.reducer;
