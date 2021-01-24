import React from 'react';
import VoteItem from '../vote-item/vote-item';
import { vote as voteType } from '../types';

import './vote-table.scss';

interface VoteContainerProps {
    votes: Array<voteType>
}

const VoteTable = (votes: VoteContainerProps): JSX.Element => {
    const calculateWinner = (votesArray: Array<voteType>) => {
        const lengths = votesArray.map((vote) => vote.members.length);
        return Math.max(...lengths);
    }

    const mostVotes = calculateWinner(votes.votes);

    const calculateProgressBar = (mostVotes: number, currentVotes: number) => {
        return parseFloat((currentVotes/mostVotes).toFixed(2))*100;
    }

    const voteItems = votes.votes.map((vote: voteType) => {
        const isWinner: boolean = mostVotes===vote.members.length;
        const progressBarSize = calculateProgressBar(mostVotes, vote.members.length);
        return(
            <VoteItem 
                key={vote.date}
                date={vote.date} 
                members={vote.members}
                isWinner={isWinner}
                progressBarSize={progressBarSize} /> );
    });
    
    return(
        <div className="vote-table">
            {
            voteItems ? voteItems : <h1>Error</h1>
            }
        </div>
    ) 
} 

export default VoteTable;
