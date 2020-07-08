import React from 'react'
import './UploadingComponent.css'


export default function UploadingComponent() {
    return (
        <div className="upload-c">
            <div className='row-1'>
                <div className='circle'>
                    <i class="fas fa-upload"></i>
                </div>
                <div className='progress'>
                    <div>
                        <span>75%</span><span>Uploading...</span>
                    </div>
                    <div>
                        <div className='filled-amount'>

                        </div>
                    </div>
                </div>
                <div className='pause-i'>
                    <div className='bar-1'>

                    </div>
                    <div className='bar-2'></div>
                </div>
            </div>
            <p>Your file is almost finished</p>
        </div>
    )
}
