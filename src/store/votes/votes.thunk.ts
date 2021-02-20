import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { ROOT_DOMAIN, VOTE_SUBROUTE } from './constants';
import { Vote } from '../../components/vote-summary/types'
import { VoteObject, ResetVoteObject }from '@store/votes/votes.model';
import { setAppLoading } from '@store/app/app.slice';

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

const resetVotes = async(url: string, token: string, body: Object): Promise<Array<Vote>> => {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
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
        //vote -ot hozzá kell tenni az url végére productionben
        const response = await fetchVotes(`${ROOT_DOMAIN}`)
        return (await response) as Vote[];
    }
);

export const sendVotesThunk = createAsyncThunk(
    'votes/sendVotes', 
    async (payload: VoteObject, {dispatch}) => {
        dispatch(setAppLoading(true));
        const {token, body} = payload;
        const freshVoteStateFromBackend = await postVotes(`${ROOT_DOMAIN}/${VOTE_SUBROUTE}`, token, body)
        dispatch(setAppLoading(false));
        return freshVoteStateFromBackend as Vote[];
    }
);

export const resetVotesThunk = createAsyncThunk(
    'votes/resetVotes', 
    async (payload: ResetVoteObject, {dispatch}) => {
        dispatch(setAppLoading(true));
        const {token, body} = payload;
        const response = await resetVotes(`${ROOT_DOMAIN}/${VOTE_SUBROUTE}`, token, body)
        dispatch(setAppLoading(false));
        return response as Vote[];
    }
);
