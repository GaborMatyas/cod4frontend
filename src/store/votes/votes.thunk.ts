import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchCurrentVotesURL } from './constants';
import { Vote } from '../../components/vote-summary/types'

const fetchVotes = async(url: string): Promise<Array<Vote>> => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        return([...json.votes]);
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }    
};

export const fetchVotesThunk = createAsyncThunk(
    'votes/fetchVotes', 
    async (url, {getState}) => {
        const response = await fetchVotes(fetchCurrentVotesURL)
        return (await response) as Vote[];
    }
);
