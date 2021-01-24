import React from 'react';

import ProgressBar from '../progress-bar/progress-bar';

import './vote-item.scss'


interface VoteItemProps {
    date: string,
    members: Array<string>,
    isWinner: boolean,
    progressBarSize: number
}

const VoteItem = ({date, members, isWinner, progressBarSize}: VoteItemProps ): JSX.Element => {
    const votes = members.length;
    const progressBarLength = {
        width: `${progressBarSize}%`
    } as const;

    return (
        <div className="vote-item">
            <div className="day-container">
                <span className={`day ${isWinner ? "winner" : ""}`}>{date}</span>
            </div>
            <div className="vote-container">
                <div className="progress-wrapper">
                    <ProgressBar isWinner={isWinner} progressBarSize={progressBarSize}/>
                    {/* <div className="progress-bar">
                        <div 
                        className={`progress ${isWinner ? "winner" : ""} fill`}
                        style={progressBarLength} >
                            <div className="glow"></div>
                        </div>
                    </div> */}
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