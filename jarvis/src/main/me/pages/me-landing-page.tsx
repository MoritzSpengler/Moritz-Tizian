import '../../global.css';
import './me-landing-page.css'
import { LandingPageHeader } from './components/me-landing-page-sidebar';
import { MeCalendar } from './components/me-calendar';
import type { EventInput } from '@fullcalendar/core/index.js';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';

export function MeLandingPage() {
    const [events, setEvents] = useState<EventInput[]>([]);

  const addEvent = (title: string, date: Dayjs, startTime?: Dayjs, endTime?: Dayjs) => {
    const newEvent: EventInput = {
      title,
      ...(startTime && endTime
        ? {
            start: date.format('YYYY-MM-DD') + 'T' + startTime.format('HH:mm:ss'),
            end: date.format('YYYY-MM-DD') + 'T' + endTime.format('HH:mm:ss'),
          }
        : {
            date: date.format('YYYY-MM-DD'),
          }),
    };

    setEvents(prev => [...prev, newEvent]);
  };

    return (
        <div className="landingPage">
            <div className="landingPageHeader">
                <LandingPageHeader onAddEvent={addEvent}/> 
            </div>
            <div className="calendarContainer">
                <MeCalendar events={events}/>
            </div>
        </div>
    );
}