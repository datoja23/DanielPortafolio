"use client"

import { useState } from 'react';
// import './Contact.css';

export default function Contact() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id="contact" className="contact section" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h2>Contacto</h2>
            <div className="contact_CV">
                <img src="/images/proximo.png" className={`arrow arrow-left ${isHovered ? 'arrow-animation-left' : ''}`} />
                <a className="btn btn_cv" href="/assets/Néstor Daniel Torres Jaimes.pdf">Descargar CV</a>
                <img src="/images/proximo-2.png" className={`arrow arrow-right ${isHovered ? 'arrow-animation-right' : ''}`} />
            </div>
        </div>
    );
}
