import React, { useState, useEffect} from 'react';

import Header from '../components/header/header';
import VoteTable from '../components/vote-summary/vote-table/vote-table';
import { vote } from '../components/vote-summary/constants';

import './vote-summary.scss';
// import { getVotes } from '../utils/utils';

const URL: string = "http://localhost:5000";

const VoteSummary = () =>{
    const [fetchedVotes, setVotes] = useState<Array<vote> | undefined>(undefined);
    
    useEffect(() => {
      const getVotes = async(url: string) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setVotes([...json.votes]);
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }    
      }
      getVotes(URL);
    }, []);
    
    return(
        <>
            <Header/>
            {
              fetchedVotes && <VoteTable votes={fetchedVotes}/>
            }

        </>
    )
     
}

export default VoteSummary;
