import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUserName } from '@app/store/auth/auth.selectors';
import VoteItem from '@components/vote-summary/vote-item/vote-item';
import { calculateProgressBar, calculateWinner, whichMembersVoted } from './vote-table.utils';
import { Vote  } from '@components/vote-summary/types';

import './vote-table.scss';

interface VoteContainerProps {
    votes: Array<Vote>
}

const VoteTable = (votes: VoteContainerProps): JSX.Element => {
    const mostVotes = calculateWinner(votes.votes);
    const membersVoted = whichMembersVoted(votes.votes);
    const [isCheckboxVisible, setCheckboxVisibility] = useState<boolean>(true);
    const currentUserName = useSelector(selectUserName);
    const voteItems = votes.votes.map((vote: Vote) => {
        // const membersDidntVotedForThatDay = whichMembersDidntVotedForThatDay(membersVoted, vote);
        // console.log('membersDidntVotedForThatDay',membersDidntVotedForThatDay);
        const isWinner: boolean = mostVotes===vote.members.length;
        const progressBarSize = calculateProgressBar(membersVoted.length, vote.members.length);
        return(
            <VoteItem 
                key={vote.date}
                date={vote.date} 
                members={vote.members}
                isWinner={isWinner}
                progressBarSize={progressBarSize}
                isCheckboxVisible={isCheckboxVisible} 
                currentUserName={currentUserName}/> );
    });
    
    return(
        <>
            <div className="vote-table">
                {voteItems}
            </div>
            <button className='vote-button' onClick={()=>(console.log('x'))} > Szavazok</button>
        </>
    ) 
} 

export default VoteTable;
