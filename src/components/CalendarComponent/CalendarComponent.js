import React from 'react'
import './CalendarComponent.css'

export default function CalendarComponent() {
    return (
        <div className='calendar-c'>
            <div className='months'>
                <i class="far fa-arrow-alt-circle-left"></i>
                <span>June 2020</span>
                <i class="far fa-arrow-alt-circle-right"></i>
            </div>
            <div className='week-days'>
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
            </div>
            <div className='grid-container'>
                <div class="grid-item">25</div>
                <div class="grid-item">26</div>
                <div class="grid-item">27</div>
                <div class="grid-item">28</div>
                <div class="grid-item">29</div>
                <div class="grid-item">30</div>
                <div class="grid-item">31</div>
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>
                <div class="grid-item">7</div>
                <div class="grid-item">8</div>
                <div class="grid-item">9</div>
                <div class="grid-item">10</div>
                <div class="grid-item">11</div>
                <div class="grid-item">12</div>
                <div class="grid-item">13</div>
                <div class="grid-item">14</div>
                <div class="grid-item">15</div>
                <div class="grid-item">16</div>
                <div class="grid-item">17</div>
                <div class="grid-item">18</div>
                <div class="grid-item black-color dark-bg2">19</div>
                <div class="grid-item black-color gray-bg2">20</div>
                <div class="grid-item black-color dark-bg2">21</div>
                <div class="grid-item black-color">22<span className='green-dot'></span></div>
                <div class="grid-item black-color">23</div>
                <div class="grid-item black-color">24</div>
                <div class="grid-item black-color">25</div>
                <div class="grid-item black-color">26</div>
                <div class="grid-item black-color">27</div>
                <div class="grid-item black-color">28</div>
                <div class="grid-item black-color">29</div>
                <div class="grid-item black-color">30</div>
                <div class="grid-item ">31</div>
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>
                <div class="grid-item">4</div>
            </div>
        </div>
    )
}
