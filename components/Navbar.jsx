"use client"

import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isMobileMenuVisible, setMobileMenuVisibility] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuVisibility(!isMobileMenuVisible);
    };

    useEffect(() => {
        // Agregar un controlador de eventos al elemento body para detectar clics
        const handleBodyClick = (e) => {
            if (isMobileMenuVisible) {
                // Si el menú está abierto y se hizo clic fuera de él, ciérralo
                if (!e.target.closest('.navbar') && !e.target.closest('.menu')) {
                    setMobileMenuVisibility(false);
                }
            }
        };

        // Agregar el controlador de eventos cuando el componente se monta
        document.body.addEventListener('click', handleBodyClick);

        // Remover el controlador de eventos cuando el componente se desmonta
        return () => {
            document.body.removeEventListener('click', handleBodyClick);
        };
    }, [isMobileMenuVisible]);

    return (
        <div className="nav">
            <div className={`menu ${isMobileMenuVisible ? 'active' : ''}`} onClick={toggleMobileMenu}>
                <img
                    src={isMobileMenuVisible ? '/images/marca.png' : '/images/menu.png'}
                    alt="Menú"
                />
            </div>
            <nav className={`navbar ${isMobileMenuVisible ? 'active' : ''}`}>
                <ul>
                    <li>
                        <button className="btn btn-white">
                            <a href="#home">Inicio</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-white">
                            <a href="#about">Sobre mi</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-white">
                            <a href="#skills">skills</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-white">
                            <a href="#projects">Proyectos</a>
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-white">
                            <a href="#contact">Contacto</a>
                        </button>
                    </li>
                    <li>
                        <a href="http://linkedin.com/in/n%C3%A9stor-daniel-torres-jaimes-036792159" target="_blank">
                            <p>in</p>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
