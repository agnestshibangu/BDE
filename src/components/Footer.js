import React from "react";
import '../Style/footer.scss';


export default function Footer() {
    return (
        <footer className="footer">
                    <div className="footer-links">
                        <ul class="footer-navbar-nav">
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
                    <p className="phrase-footer">Copyright by People's Daily Online, All Rights Reserved</p>
        </footer>
    )
}