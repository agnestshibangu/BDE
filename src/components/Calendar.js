import React, { useState, useEffect } from 'react';
import '../Style/calendar.scss';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import dataCalendar from '../dataCalendar';

export default function Calendar() {

  const [events, setEvents] = useState(dataCalendar);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [activeSlideTime, setActiveSlideTime] = useState(events[0]?.subevents[0]?.time || '');
  const [activeSlideDate, setActiveSlideDate] = useState(events[0]?.date || '');
  const [activeSlideDescription, setActiveSlideDescription] = useState(events[0]?.subevents[0]?.description || '');
  const [activeDate, setActiveDate] = useState(true);

  const handleSlideClick = (time, date, description) => {
    setActiveSlideTime(time);
    setActiveSlideDate(date);
    setActiveSlideDescription(description);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'up') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    setActiveSlideDate(events[currentIndex]?.date || '');
    setActiveSlideTime(events[currentIndex]?.subevents[0]?.time || '');
    setActiveSlideDescription(events[currentIndex]?.subevents[0]?.description || '');
  }, [currentIndex, events]);

  return (
    <div className='calendar-section'>
      <div className='calendar-slide'>
        {/* <p className='slide-content'>{activeSlideDate}</p>
        <p className='slide-content'>{activeSlideTime}</p> */}
        <p className='slide-content' onClick>{activeSlideDescription}</p>
      </div>
  
      <div className='calendar-box'>
        <div className='calendar-list'>
          {events.map((event, index) => (
            <div key={index}>
              <p className='calendar-list-item'>{event.date}</p>
              <div className='subevents-container'>
                {event.subevents.map((subevent, subIndex) => (
                  <p
                    key={subIndex}
                    className='calendar-list-subitem'
                    onClick={() => handleSlideClick(subevent.time, event.date, subevent.description)}
                  >
                    {subevent.time}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
  
      {/* <div className='arrows-box'>
        <IoIosArrowUp className='arrow-up' onClick={() => handleArrowClick('up')} />
        <IoIosArrowDown className='arrow-down' onClick={() => handleArrowClick('down')} />
      </div> */}
    </div>
  );

}
