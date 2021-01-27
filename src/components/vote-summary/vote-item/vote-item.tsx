import React from 'react';

import ProgressBar from '@components/vote-summary/progress-bar/progress-bar';

import './vote-item.scss'
interface VoteItemProps {
    date: string,
    members: Array<string>,
    isWinner: boolean,
    progressBarSize: number,
    membersDidntVotedForThatDay: Array<string>
}

const VoteItem = ({date, members, isWinner, progressBarSize, membersDidntVotedForThatDay}: VoteItemProps ): JSX.Element => {
    const votes = members.length;
    return (
        <div className={`vote-item ${isWinner ? "winner" : ""}`}>
            <div className="day-container">
                <span className="day">{date}</span>
            </div>
            <div className="vote-container">
                <div className="progress-wrapper">
                    <ProgressBar isWinner={isWinner} progressBarSize={progressBarSize}/>
                    <div className="votes-wrapper">
                        <span className="calculated-votes">
                            {votes}
                        </span>
                    </div>
                </div>
                <ul className="members-voted">
                    <span className="ok-this-day">Akinek jó: </span>
                    {members.map((member: string) => 
                        <li className="voter" key={member}>{member}</li>
                    )}
                </ul>
                <ul className="members-not-voted">
                <span className="not-ok-this-day">Akinek nem jó: </span>
                    {membersDidntVotedForThatDay.map((member: string) => 
                        <li className="voter" key={member}>{member}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default VoteItem;