import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProgressBar from '@components/vote-summary/progress-bar/progress-bar';
import SoldierIcon from '@assets/img/soldier-standing.svg';
import { UserWithAvatar } from '@components/vote-summary/types';
import { selectUserAvatarURL } from '@store/auth/user.selectors';
import { togglehUserVoteWithCheckbox } from '@store/votes/votes.slice';

import './vote-item.scss'
interface VoteItemProps {
    date: string,
    members: Array<UserWithAvatar>,
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
        console.log(membersOnThatDay);
        const isLogedInUserIncluded = membersOnThatDay.filter(member => (
            member.username===currentUserName
        ));
    return isLogedInUserIncluded.length > 0;
}

const VoteItem = ({date, members, isWinner, progressBarSize, isCheckboxVisible, currentUserName}: VoteItemProps ): JSX.Element => {
    const isChecked = getCheckboxValue(currentUserName, members);
    const votes = members.length;
    const dispatch = useDispatch();
    const avatarURL = useSelector(selectUserAvatarURL);
    const voteContainer = 
        <>
            <div className="progress-wrapper">
                <ProgressBar progressBarSize={progressBarSize}/>
            </div>
            <ul className="members-voted">
                {members.map((member: UserWithAvatar, index: number) => 
                    <li className="voter" key={index}>
                        <div 
                            className="avatar" 
                            style={{background: `rgba(8, 97, 44, 0.2) url(${member.avatarURL}) center center no-repeat`, 
                            backgroundSize: 'contain' 
                        }}/>
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
            onChange={()=>dispatch(togglehUserVoteWithCheckbox({
                currentUserName, 
                date, 
                avatarURL} ))} />

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
                    <SoldierIcon/>
                </span>
            </div>
        </div>
    )
}

export default VoteItem;
