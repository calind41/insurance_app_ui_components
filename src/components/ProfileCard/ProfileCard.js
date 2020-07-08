import React from 'react'
import './ProfileCard.css'
import manager_pic from './manager_pic.jpeg'

export default function ProfileCard() {
    return (
        <div className='profile-cc'>
            <div className='body-container'>
                <div className='picture'>
                    <img src={manager_pic} alt='Jay Vaughn' />
                    <span>Manager</span>
                </div>
                <div className='info'>
                    <h3>Jay Vaughn</h3>
                    <h5>Shell, Inc.</h5>
                    <h6>08 Deshawn Crossing Apt. 199, PA</h6>
                    <div className='wrapper'>
                        <div>
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Pensylvania</span>
                        </div>
                        <div>
                            <i class="fas fa-phone-alt"></i>
                            <span>011-024-2411</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className='footer'>
                <span>www.jayvaughn.com </span>
                <span>jay@insurance.com </span>
            </div>
        </div>
    )
}
