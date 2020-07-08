import React from 'react'
import './ArticleCard.css'
import profile from './profile_img.jpeg'

export default function ArticleCard() {
    return (
        <div className='article-card-c'>
            <div className='img'>
                <img src={profile} alt='profile image' />
            </div>
            <div className='text-side'>
                <h3>How Life Insurance Saved My Life</h3>
                <p className='desc'>
                    Life was good for my family in 1989. My father was
                    well-paid president of a marketing company.
                </p>
                <p className='footer'>
                    Theresa Graves
                    <span>June 2, 2020</span>
                </p>
            </div>
            <div className='icons'>
                <i class="fas fa-ellipsis-h"></i>
                <i class="fas fa-share"></i>
            </div>
        </div>
    )
}
