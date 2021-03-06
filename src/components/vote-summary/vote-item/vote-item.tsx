import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProgressBar from '@components/vote-summary/progress-bar/progress-bar';
import SoldierIcon from '@assets/img/soldier-standing.svg';
import { UserWithAvatar } from '@components/vote-summary/types';
import { selectUserAvatarURL } from '@app/store/auth/auth.selectors';
import { toggleUserVoteWithCheckbox } from '@store/votes/votes.slice';

import './vote-item.scss'
interface VoteItemProps {
    date: string,
    membersVotedForThisDay: Array<UserWithAvatar>,
    isWinner: boolean,
    progressBarSize: number,
    isCheckboxVisible: boolean
    currentUserName: string
    // membersDidntVotedForThatDay: Array<string>
}

const getCheckboxValue = (
    currentUserName: string,
    membersOnThatDay: Array<UserWithAvatar>)
    : boolean => {
    const isLogedInUserIncluded = membersOnThatDay.filter(member => (
        member.username === currentUserName
    ));
    return isLogedInUserIncluded.length > 0;
}

const VoteItem = ({ date, membersVotedForThisDay, isWinner, progressBarSize, isCheckboxVisible, currentUserName }: VoteItemProps): JSX.Element => {
    const isChecked = getCheckboxValue(currentUserName, membersVotedForThisDay);
    const votes = membersVotedForThisDay.length;
    const dispatch = useDispatch();
    const avatarURL = useSelector(selectUserAvatarURL);
    const voteContainer =
        <>
            <div className="progress-wrapper">
                <ProgressBar progressBarSize={progressBarSize} />
            </div>
            <ul className="members-voted">
                {membersVotedForThisDay.map((member: UserWithAvatar, index: number) =>
                    <li className="voter" key={index}>
                        <div
                            className="avatar"
                            style={{
                                background: `rgba(53, 53, 63, 0.8) url(${member.avatarURL}) center center no-repeat`,
                                backgroundSize: 'contain'
                            }} />
                    </li>
                )}
            </ul>
            {/* <ul className="members-not-voted">
                <span className="not-this-day-members"></span>
                    {membersDidntVotedForThatDay.map((member: string) => 
                        <li className="voter" key={member}>{member}</li>
                    )}
            </ul> */}
        </>

    const checkbox =
        <input
            name="day-checkbox"
            type="checkbox"
            checked={isChecked}
            onChange={() => dispatch(toggleUserVoteWithCheckbox({
                currentUserName,
                date,
                avatarURL
            }))} />

    return (
        <div className={`vote-item ${isWinner ? "winner" : ""}`}>
            <div className="day-container">
                <span className="day">{date}</span>
            </div>
            <div className="vote-container">
                {isCheckboxVisible ? checkbox : voteContainer}
            </div>
            <div className="votes-wrapper">
                <span className="calculated-votes">
                    {votes}
                    <SoldierIcon />
                </span>
            </div>
        </div>
    )
}

export default VoteItem;
