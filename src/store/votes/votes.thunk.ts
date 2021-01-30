import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCurrentVotesURL } from './constants';
import { Votes } from '../../components/vote-summary/types';
import {fetchVotesFailed, fetchVotesSuccess} from './votes.slice';

// import { Vote } from '@components/vote-summary/types';
import { Vote } from '../../components/vote-summary/types'
import { StateObservable } from 'redux-observable';

export const fetchVotes = async(url: string): Promise<Array<Vote>> => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return([...json.votes]);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }    
}

// export const fetchVotesThunk = createAsyncThunk<void, Votes>(
//     'votes/fetchVotes',
//     (payload, { dispatch }) => {
//         dispatch(fetchVotesSuccess(payload));
//     }
// );

export const fetchVotesThunk = createAsyncThunk('votes/fetchVotes', async () => {
    const response = await fetchVotes(fetchCurrentVotesURL)
    console.log('res',response);
    return (await response) as Vote[];
})