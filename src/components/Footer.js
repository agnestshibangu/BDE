import React from "react";
import '../Style/footer.scss';
import logoImage from '../images/leaders/logo.webp';

export default function Footer() {
    return (
        <footer className="footer">
            <img src={logoImage} alt="Logo" />
        </footer>
    );
}
