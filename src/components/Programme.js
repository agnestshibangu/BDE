import React, { useState } from 'react';
import '../Style/section.scss';
import '../Style/programme.scss';
import dataProgram from '../dataProgram';
import { FaRegHandPointRight } from "react-icons/fa6";

export default function Section() {

    const [point, setPoint] = useState(dataProgram);
    const [isClicked, setIsClicked] = useState(false);
    const [activePoint, setActivePoint] = useState(point[0]);

    const handleClick = (id) => {
        setIsClicked(true);
        console.log(id);
        setActivePoint(point.find(points => points.id === id));
    };

    const handleMouseOut = () => {
        setIsClicked(false);
    };

    return (
        <div className="main-section">
            <h2 className="section-title section-title-generic">PROGRAMME</h2>
            <div className="program-points-container">
                {point.map((points) => {
                    const { id, title } = points;

                    return (
                        <span
                            key={id}
                            onClick={() => handleClick(id)}
                            // onMouseLeave={handleMouseOut}
                            className="program-point">
                            {title}
                        </span>
                    );
                })}
            </div>
            <div className="subpoints-container">
                
                    {activePoint.subpoints.map((subpoint, index) => (
                        <p key={index} className='subpoint'><FaRegHandPointRight className='point-icon'/> {subpoint.point}</p>
                    ))}
                
            </div>
        </div>
    )
}
