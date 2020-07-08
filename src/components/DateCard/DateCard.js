import React from 'react'
import './DateCard.css'

export default function DateCard({ date, dayOfWeek }) {
    return (
        <div className='date-card-c'>
            <div className='date'>{date}</div>
            <div className='dayOfWeek'>{dayOfWeek}</div>
        </div>
    )
}
