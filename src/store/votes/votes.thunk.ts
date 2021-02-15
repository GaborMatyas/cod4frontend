import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { fetchCurrentVotesURL, postVotesURL } from './constants';
import { Vote } from '../../components/vote-summary/types'
import { VoteObject }from '@store/votes/votes.model';

const fetchVotes = async(url: string): Promise<Array<Vote>> => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return([...json.votes]);
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }    
};

const postVotes = async(url: string, token: string, body: Object): Promise<Array<Vote>> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Auth-Token': token,
            },
            body: JSON.stringify(body)
        });
        if (response.status === 200) {
            const json = await response.json();
            return([...json.votes]);
        } else {
            return Promise.reject();
        }
    } catch (error) {
        console.error(error);
        throw new Error(error);
    }    
};

export const fetchVotesThunk = createAsyncThunk(
    'votes/fetchVotes', 
    async (_, {getState}) => {
        const response = await fetchVotes(fetchCurrentVotesURL)
        return (await response) as Vote[];
    }
);

export const sendVotesThunk = createAsyncThunk(
    'votes/sendVotes', 
    async (payload: VoteObject) => {
        const {token, body} = payload;
        const freshVoteStateFromBackend = await postVotes(postVotesURL, token, body)
        return freshVoteStateFromBackend as Vote[];
    }
);
