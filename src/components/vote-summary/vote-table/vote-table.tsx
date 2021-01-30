import React from 'react';

import Button from '@components/common/button/button';
import VoteItem from '@components/vote-summary/vote-item/vote-item';
import { Vote  } from '@components/vote-summary/types';

import './vote-table.scss';

interface VoteContainerProps {
    votes: Array<Vote>
}

const calculateWinner = (votesArray: Array<Vote>) => {
    const lengths = votesArray.map((vote) => vote.members.length);
    return Math.max(...lengths);
}

const whichMembersVoted = (votesArray: Array<Vote>): Array<string> => {
    const allVoter = votesArray.map(vote => vote.members);
    const set = new Set([].concat.apply([], allVoter));
    return Array.from(set) as Array<string>;
}

const calculateProgressBar = (mostVotes: number, currentVotes: number) => {
    return parseFloat((currentVotes/mostVotes).toFixed(2))*100;
}

const whichMembersDidntVotedForThatDay = (allMembersWhoVotedThisWeek: Array<string>, thisDayIsOkForTheseMembers: Array<string>) => (
        allMembersWhoVotedThisWeek.filter(member => !thisDayIsOkForTheseMembers.includes(member)));

const VoteTable = (votes: VoteContainerProps): JSX.Element => {
    const mostVotes = calculateWinner(votes.votes);
    const membersVoted = whichMembersVoted(votes.votes);
    
    const voteItems = votes.votes.map((vote: Vote) => {
        const membersDidntVotedForThatDay = whichMembersDidntVotedForThatDay(membersVoted, vote.members);
        console.log(membersDidntVotedForThatDay);
        const isWinner: boolean = mostVotes===vote.members.length;
        const progressBarSize = calculateProgressBar(membersVoted.length, vote.members.length);
        return(
            <VoteItem 
                key={vote.date}
                date={vote.date} 
                members={vote.members}
                isWinner={isWinner}
                progressBarSize={progressBarSize} 
                membersDidntVotedForThatDay={membersDidntVotedForThatDay}/> );
    });
    
    return(
            <>
            <div className="vote-table">
                {voteItems}
            </div>
            <Button className='vote-button' text="Szavazok" handleClick={()=>(console.log('x'))}  />
        </>
    ) 
} 

export default VoteTable;
