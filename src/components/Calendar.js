import React, { useState, useEffect } from 'react';
import '../Style/calendar.scss';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import dataCalendar from '../dataCalendar';

export default function Calendar() {

  const [events, setEvents] = useState(dataCalendar);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [activeSlideTime, setActiveSlideTime] = useState(events[0].subevents[0].time);
  const [activeSlideDate, setActiveSlideDate] = useState(events[0].date);
  const [activeSlideTitle, setActiveSlideTitle] = useState(events[0].subevents[0].title);
  const [activeSlideDescription, setActiveSlideDescription] = useState(events[0].subevents[0].description);
  const [activeSlideMembers, setActiveSlideMembers] = useState(events[0].subevents[0].members);
  const [activeSlideLocation, setActiveSlideLocation] = useState(events[0].subevents[0].location);

  const handleSlideClick = (time, date, description, title, members, location) => {
    setActiveSlideTime(time);
    setActiveSlideDate(date);
    setActiveSlideTitle(title);
    setActiveSlideDescription(description);
    setActiveSlideMembers(members);
    setActiveSlideLocation(location);
  };

  const handleArrowClick = (direction) => {
    if (direction === 'up') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? events.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === events.length - 1 ? 0 : prevIndex + 1));
    }
  };

  useEffect(() => {
    setActiveSlideDate(events[currentIndex].date);
    setActiveSlideTime(events[currentIndex].subevents[0].time);
    setActiveSlideTitle(events[currentIndex].subevents[0].description);
    setActiveSlideDescription(events[currentIndex].subevents[0].title);
    setActiveSlideMembers(events[currentIndex].subevents[0].members);
    setActiveSlideLocation(events[currentIndex].subevents[0].location);
  }, [currentIndex, events]);

  return (
    <div className='calendar-section'>

        <h2 className="section-title section-title-generic">CALENDRIER</h2>

        <div className='calendar-inner'>

            <div className='calendar-list'>
              {events.map((event, index) => (
                <div key={index}>
                  <p className='calendar-list-item'>{event.date}</p>
                  <div className='subevents-container'>
                    {event.subevents.map((subevent, subIndex) => (
                      <p
                        key={subIndex}
                        className='calendar-list-subitem'
                        onClick={() => handleSlideClick(subevent.time, event.date, subevent.title, subevent.description, subevent.members, subevent.location)}
                      >
                        {subevent.time}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          
            <div className='event-infos-section'>
              <p className='slide-title'>{activeSlideDescription}</p>
              <p className='slide-time'>Horaire : {activeSlideTime}</p>
              <p className='slide-location'>Lieu : {activeSlideLocation}</p>
              <p className='slide-description'>{activeSlideTitle}</p>
            
            </div>
        </div>
    </div>
  );

}
