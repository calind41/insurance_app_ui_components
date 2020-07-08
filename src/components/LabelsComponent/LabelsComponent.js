import React from 'react'
import './LabelsComponent.css'

export default function LabelsComponent() {
    return (
        <div className='lbl-c'>
            <div className='headerr'><span>Labels</span><i class="fas fa-ellipsis-h"></i></div>
            <div className='row1'>
                <div>Family</div>
                <div className='dark-bg'>Home</div>
                <div>Health</div>
            </div>
            <div className='row2'>
                <div>Umbrella</div>
                <div>Personal</div>
                <div className='dark-bg'>Liability</div>
            </div>
        </div>
    )
}
