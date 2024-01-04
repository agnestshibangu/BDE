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
            <p className='calendar-list-item'>je suis le premier evenement</p>
            <p className='calendar-list-item'>je suis le deuxieme evenemen</p>
            <p className='calendar-list-item'>je suis le troisiene evenement</p>
          </div>
        </div>

        <div className='arrows-box'>
          <IoIosArrowDropup />
          <IoIosArrowDropdown />
          
        </div>
    </div>
  )
}
