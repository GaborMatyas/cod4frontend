import React from 'react';
import { vote } from '../constants';
import './vote-item.scss'

interface VoteItemProps {
    date: string,
    members: Array<string>,
    isWinner: boolean,
    progressBarSize: number
}

const VoteItem = ({date, members, isWinner, progressBarSize}: VoteItemProps )=> {
    const votes = members.length;
    const progressBarLength = {
        width: `${progressBarSize}%`
    } as const;

    return (
        <div className="vote-item">
            <div className="day-container">
                <span className="day">{date}</span>
            </div>
            <div className="vote-container">
                <div className="progress-wrapper">
                    <div className="progress">
                        <div 
                        className={`progress-bar ${isWinner ? "winner" : ""}`}
                        style={progressBarLength} ></div>
                    </div>
                    <div className="votes-wrapper">
                        <span className={`calculated-votes ${isWinner ? "winner" : ""}`}>
                            {votes}
                        </span>
                    </div>
                </div>
                <ul className="members-voted">
                    {members.map((member: string) => 
                        <li className="voter" key={member}>{member}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default VoteItem;