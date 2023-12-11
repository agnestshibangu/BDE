import React from "react";
import '../Style/navbar.scss';


export default function Navbar() {
    return (
        <div className="navbar-container">
                    <ul class="navbar-nav">
                        {/* <a href="#page-top"></a> */} 
                        <li class="">
                            <a class="li-list-navbar" href="#services">Leader's Activities</a>
                        </li>
                        <li class="">
                            <a class="li-list-navbar" href="#portfolio">Latest News</a>
                        </li>
                        <li class="">
                            <a class="li-list-navbar" href="#team">Team</a>
                        </li>
                        <li class="">
                            <a class="li-list-navbar" href="#contact">About</a>
                        </li>
                </ul>

        </div>
    )
}