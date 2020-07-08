import React from 'react'
import './PaymentNotification.css'

export default function PaymentNotification() {
    return (
        <div className='pay-n-c'>
            <div className='row1'>
                <span>Payment</span>
                <i class="fas fa-bell"></i>
            </div>
            <div className='row2'>
                <p>
                    You have a bill due for your
                    Health Insurance Payment Plan on
                    <span>Jun 1, 2020</span>
                </p>
            </div>
        </div>
    )
}
