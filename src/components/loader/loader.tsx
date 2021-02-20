import React from 'react';

import './loader.scss';

const Loader = () => (
    <div className="loader-background">
        <div className="loader-wrapper">
            <div className="loader" id="loader"></div>
            <div className="loader" id="loader2"></div>
            <span id="text">LOADING...</span>
        </div>
    </div>
)

export default Loader;
