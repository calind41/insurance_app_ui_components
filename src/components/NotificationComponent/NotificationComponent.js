import React from 'react'
import './NotificationComponent.css'

export default function NotificationComponent() {
    return (
        <div className='notif-c'>
            <div className='header'>
                <span>Notification</span>
                <i class="fas fa-ellipsis-h"></i>
            </div>
            <div className='wrapper'>
                <div>
                    <span>Liability</span>
                    <span>7</span>
                </div>
                <div>
                    <span>Personal</span>
                    <span>13</span>
                </div>
                <div>
                    <span>Health</span>
                    <span>21</span>
                </div>
            </div>

        </div>
    )
}
