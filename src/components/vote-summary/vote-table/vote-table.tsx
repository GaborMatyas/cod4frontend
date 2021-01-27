import React from 'react';

import Button from '@components/common/button/button';
import VoteItem from '@components/vote-summary/vote-item/vote-item';
import { Vote as voteType } from '@components/vote-summary/types';

import './vote-table.scss';

interface VoteContainerProps {
    votes: Array<voteType>
}

const calculateWinner = (votesArray: Array<voteType>) => {
    const lengths = votesArray.map((vote) => vote.members.length);
    return Math.max(...lengths);
}

const whichMembersVoted = (votesArray: Array<voteType>): Array<string> => {
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
    
    const voteItems = votes.votes.map((vote: voteType) => {
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
            <Button className='vote' text="Szavazok" handleClick={()=>(console.log('x'))}  />
        </>
    ) 
} 

export default VoteTable;
