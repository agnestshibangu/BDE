import React from 'react'
import '../Style/calendar.scss';
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Calendar() {
  return (
    <div className='calendar-section'>
        {/* <h2 className='calendar-title'>Les dates importantes</h2> */}
        
        <div className='calendar-box'>
          <div className='calendar-list'>
            <p className='calendar-list-item'>29 janvier 2024</p>
            <p className='calendar-list-subitem'>9 AM</p>
            <p className='calendar-list-subitem'>12 AM</p>
            <p className='calendar-list-subitem'>4 PM</p>
            <p className='calendar-list-item'></p>
            <p className='calendar-list-item'>4 fevrier 2024</p>
            <p className='calendar-list-subitem'>3 PM</p>
          </div>
        </div>

        <div className='arrows-box'>
          <IoIosArrowDropup />
          <IoIosArrowDropdown />
          
        </div>
    </div>
  )
}