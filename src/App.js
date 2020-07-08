import React from 'react';
import UploadingComponent from './components/UploadingComponent/UploadingComponent'
import FourIconMenu from './components/FourIconMenu/FourIconMenu'
import './App.css'
import PaymentNotification from './components/PaymentNotification/PaymentNotification';
import YokohamaCard from './components/YokohamaCard/YokohamaCard';
import YourScoreComponent from './components/YourScoreComponent/YourScoreComponent';
import LabelsComponent from './components/LabelsComponent/LabelsComponent';
import DateCard from './components/DateCard/DateCard'
import ArticleCard from './components/ArticleCard/ArticleCard'
import NotificationComponent from './components/NotificationComponent/NotificationComponent';
import ProfileCard from './components/ProfileCard/ProfileCard'
import CalendarComponent from './components/CalendarComponent/CalendarComponent';
import WeeklyReportC from './components/WeeklyReportC/WeeklyReportC';

function App() {
  return (
    <div className='grid-c'>
      <div className='grid-itm'>
        <UploadingComponent />
      </div>
      <div className='grid-itm'>
        <FourIconMenu />
      </div>
      <div className='grid-itm'>
        <PaymentNotification />
      </div>
      <div className='grid-itm'>
        <YokohamaCard />
      </div>
      <div className='grid-itm'>
        <YourScoreComponent />
      </div>
      <div className='grid-itm'>
        <LabelsComponent />
      </div>
      <div className='grid-itm'>
        <div className='date-card-wrapper'>
          <DateCard date='21' dayOfWeek='Monday' />
          <DateCard date='22' dayOfWeek='Tuesday' />
          <DateCard date='23' dayOfWeek='Wednesday' />
          <DateCard date='24' dayOfWeek='Thursday' />
        </div>
      </div>
      <div className='grid-itm'>
        <ArticleCard />
      </div>
      <div className='grid-itm'>
        <NotificationComponent />
      </div>
      <div className='grid-itm'>
        <ProfileCard />
      </div>
      <div className='grid-itm'>
        <CalendarComponent />
      </div>
      <div className='grid-itm'>
        <WeeklyReportC />
      </div>

    </div>
  );
}

export default App;
