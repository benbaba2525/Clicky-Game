import React from 'react';
import "./Score.css";

// PROPS: Navbar
const Score = props => (
    
    <div className="banner text-center d-flex align-items-center justify-content-center">    
    
        <div className="col-lg-4">
            <button id={props.shake} className={`btn btn-block btn-score btn-${props.alertType}`}>
                <h3>Score <span className="badge">{props.score}</span></h3>
            </button>
            <button className={`btn btn-block btn-score btn-${props.topScoreType}`}>
                <h3>Top Score <span className="badge">{props.topScore}</span></h3>
            </button>
        </div>
    </div>


);
// EXPORT DEFAULT: Score
export default Score;