import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchVotesThunk } from '@store/votes/votes.thunk';
import Header from '@app/components/header/header';
import VoteTable from '@components/vote-summary/vote-table/vote-table';
import { selectVoteState, selectVotesStatus } from '@store/votes/votes.selectors';

const VoteSummary = () =>{
    const dispatch = useDispatch();
    const votesStatus = useSelector(selectVotesStatus);

    useEffect(() => {
        if (votesStatus === 'fetch') {
            dispatch(fetchVotesThunk());
        }
    }, [votesStatus, dispatch]);
    return(
        <>
            <Header/>
            <VoteTable votes={useSelector(selectVoteState).votes}/>
        </>
    )
}

export default VoteSummary;
