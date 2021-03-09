import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSnapshot } from '@store/votes/votes.slice';
import { selectUserState } from '@store/auth/auth.selectors';
import { selectVotesSnapshot } from '@store/votes/votes.selectors';
import { Roles } from '@app/store/auth/auth.constants';
import VoteItem from '@components/vote-summary/vote-item/vote-item';
import {
    calculateProgressBar,
    calculateWinner,
    whichMembersVotedThisWeek,
    takeSnapshotFromVotesAlphabeticalOrder,
    isVotesStateChanged
} from './vote-table.utils';
import { Vote } from '@components/vote-summary/types';
import { ResetVoteObject } from '@store/votes/votes.model';
import { User } from '@app/store/auth/auth.constants';
import { getToken } from '@store/auth/auth.utils';
import { sendVotesThunk, resetVotesThunk } from '@store/votes/votes.thunk';


import './vote-table.scss';
import { VoteObject } from '@app/store/votes/votes.model';

interface VoteContainerProps {
    votes: Array<Vote>
}

const VoteTable = (votes: VoteContainerProps): JSX.Element => {
    const dispatch = useDispatch();
    const mostVotes = calculateWinner(votes.votes);
    const votesSnapshot = useSelector(selectVotesSnapshot);
    const membersVoted = whichMembersVotedThisWeek(votes.votes);
    const currentUser = useSelector(selectUserState);
    const isCurrentUserVoted = membersVoted.includes(currentUser.nickName);

    const [isCheckboxVisible, setCheckboxVisibility] = useState<boolean>(false);
    const voteItems = votes.votes.map((vote: Vote) => {
        // const membersDidntVotedForThatDay = whichMembersDidntVotedForThatDay(membersVoted, vote);
        // console.log('membersDidntVotedForThatDay',membersDidntVotedForThatDay);
        const isWinner: boolean = mostVotes === vote.members.length;
        const progressBarSize = calculateProgressBar(membersVoted.length, vote.members.length);

        return (
            <VoteItem
                key={vote.date}
                date={vote.date}
                membersVotedForThisDay={vote.members}
                isWinner={isWinner}
                progressBarSize={progressBarSize}
                isCheckboxVisible={isCheckboxVisible}
                currentUserName={currentUser.nickName} />);
    });

    const takeSnapshotAndShowCheckboxes = (votes: Vote[]) => {
        takeSnapshotFromVotesAlphabeticalOrder(votes)
        dispatch(setSnapshot(takeSnapshotFromVotesAlphabeticalOrder(votes)));
        setCheckboxVisibility(true);
    }

    const handleVoteing = (votes: Vote[], snapshotVotesAlphabeticalOrder: Array<Array<string>>, currentUser: User) => {
        const currentNamesPerDayAlphabeticalOrder = takeSnapshotFromVotesAlphabeticalOrder(votes);
        const isUserChangedVoteState = !isVotesStateChanged(currentNamesPerDayAlphabeticalOrder, snapshotVotesAlphabeticalOrder);

        if (isUserChangedVoteState) {
            const daysOfWeek = votes.map(day => day.date);
            const indexOfDaysOfCurrentUser: number[] = [];

            currentNamesPerDayAlphabeticalOrder.forEach((day, index) => day.includes(currentUser.nickName) && indexOfDaysOfCurrentUser.push(index));
            const theDaysNameCurrentUserVotedFor: string[] = indexOfDaysOfCurrentUser.map(index => daysOfWeek[index]);
            const objectForSending: VoteObject = {
                token: getToken(),
                body: {
                    id: currentUser.id,
                    dates: [...theDaysNameCurrentUserVotedFor]
                }
            }

            dispatch(sendVotesThunk(objectForSending));
            //if the response is ok we are going forward to next steps
            //if error we show it for the user
            //send a facebook message if it was success
            //
            dispatch(setSnapshot(null));
            setCheckboxVisibility(false);
        } else {
            dispatch(setSnapshot(null));
            setCheckboxVisibility(false);
        }
    }

    const handleClick = isCheckboxVisible ?
        () => handleVoteing(votes.votes, votesSnapshot, currentUser) :
        () => takeSnapshotAndShowCheckboxes(votes.votes);

    const objectForSendingReset: ResetVoteObject = {
        token: getToken(),
        body: {
            userId: currentUser.id.toString()
        }
    }

    const resetAllVoteFromSummaryThisWeek = (objectForSendingReset: ResetVoteObject) => {
        dispatch(resetVotesThunk(objectForSendingReset));
    }

    return (
        <>
            <div className="vote-table">
                {voteItems}
                <div className="button-container">
                    <button className='vote-button' onClick={() => handleClick()} >
                        {isCurrentUserVoted ? 'Módosítás' : 'Szavazok'}
                    </button>
                    {currentUser.role === Roles.Admin &&
                        <button
                            className='vote-table-reset-button'
                            onClick={() => resetAllVoteFromSummaryThisWeek(objectForSendingReset)} >Teljes törlés
                        </button>
                    }
                </div>
            </div>
        </>
    )
}

export default VoteTable;
