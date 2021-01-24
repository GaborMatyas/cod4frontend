import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/header/header';
import VoteTable from '../components/vote-summary/vote-table/vote-table';
import { fetchVotes } from '../store/votes/votes.slice';
import { selectVoteState } from '../store/votes/votes.selectors';

const VoteSummary = () =>{

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchVotes());
    }, []);
    
    return(
        <>
            <Header/>
            {
              <VoteTable votes={useSelector(selectVoteState).votes}/>
            }

        </>
    )
     
}

export default VoteSummary;
