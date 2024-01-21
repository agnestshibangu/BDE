import React from "react";
import '../Style/section.scss';
import { GiLifeBar } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { BsCalendar2EventFill } from "react-icons/bs";

export default function Section() {
    return (
        <div className="main-section">
            <h2 className="section-title">PROGRAMME</h2>
            <div className="program-points-container">
                <span className="program-point"><GiLifeBar className="icon-programm" />Qualité de vie à 42</span>
                <span className="program-point"><MdWork className="icon-programm" />préparation à l'après 42</span>
                <span className="program-point"><GiTeacher className="icon-programm" />support à la formation</span>
                <span className="program-point"><BsCalendar2EventFill className="icon-programm" />organisation des évènement</span>
            </div>
    
        </div>
    )
}