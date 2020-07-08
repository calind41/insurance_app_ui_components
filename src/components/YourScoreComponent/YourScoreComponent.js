import React from 'react'
import './YourScoreComponent.css'

export default function YourScoreComponent() {
    return (
        <div className='y-score-c'>
            <i className="fas fa-ellipsis-h menu-icon"></i>
            <div className='half-circle'>
                <div className='filled'></div>
                <div className='your-score'>
                    <div className='score-val'>100</div>
                    <div>YOUR SCORE</div>
                </div>
                <div className='txt'>
                    Point of Sale hardware, the till at
                    a shop check out, has become very.
                </div>
            </div>
        </div>
    )
}
