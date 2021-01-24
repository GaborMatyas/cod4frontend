import React from 'react';

import './progress-bar.scss'

interface ProgressBarProps {
    isWinner: boolean,
    progressBarSize: number
}

const ProgressBar = ({isWinner, progressBarSize}: ProgressBarProps):JSX.Element => {
    
    const progressBarLength = {
        width: `${progressBarSize}%`
    } as const;

    return(
        <div className="progress-bar">
            <div 
            className={`progress ${isWinner ? "winner" : ""} fill`}
            style={progressBarLength} >
                <div className="glow"></div>
            </div>
        </div>
    )

}

export default ProgressBar;
