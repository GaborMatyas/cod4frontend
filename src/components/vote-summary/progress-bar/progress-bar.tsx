import React from 'react';

import './progress-bar.scss'

interface ProgressBarProps {
    progressBarSize: number
}

const ProgressBar = ({progressBarSize}: ProgressBarProps):JSX.Element => {
    const progressBarLength = {
        width: `${progressBarSize}%`
    } as const;

    return(
        <div className="progress-bar">
            <div 
            className={`progress fill`}
            style={progressBarLength} >
                <div className="glow"></div>
            </div>
        </div>
    )
}

export default ProgressBar;
