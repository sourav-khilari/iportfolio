// src/components/Header.js
import React, { useState, useEffect } from 'react';
import logo from '../assets/images.jpeg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger the slide-down animation after a small delay
        setTimeout(() => {
            setIsVisible(true);
        }, 100); // 100ms delay before the animation starts
    }, []);

    return (
        <header
            className={`bg-gradient-to-r from-black to-blue-800 text-white sticky top-0 left-0 w-full z-50 transition-transform duration-1000 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
        >
            <div className="container mx-auto flex justify-between items-center p-5">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-10 h-10 mr-3 transform transition-transform duration-500 hover:scale-110"
                    />

                </div>

                {/* Menu */}
                <nav className="hidden md:flex space-x-8 justify-center items-center">
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-blue-300 transition-colors duration-300")}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-blue-300 transition-colors duration-300")}>
                        Skill
                    </NavLink>
                    <NavLink to="/project" className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-blue-300 transition-colors duration-300")}>
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-blue-300 transition-colors duration-300")}>
                        Contact me
                    </NavLink>
                    <NavLink to="/console" className={({ isActive }) => (isActive ? "text-blue-300" : "hover:text-blue-300 transition-colors duration-300")}>
                        <button className='bg-black rounded-lg p-3'>
                            Terminal
                        </button>
                    </NavLink>
                </nav>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden">
                    <ul className="flex flex-col space-y-2 p-5 bg-black text-white">
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => (isActive ? "bg-blue-600" : "block px-3 py-2 hover:bg-blue-600 rounded transition duration-300")}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                className={({ isActive }) => (isActive ? "bg-blue-600" : "block px-3 py-2 hover:bg-blue-600 rounded transition duration-300")}
                            >
                                Skill
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/project"
                                className={({ isActive }) => (isActive ? "bg-blue-600" : "block px-3 py-2 hover:bg-blue-600 rounded transition duration-300")}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact"
                                className={({ isActive }) => (isActive ? "bg-blue-600" : "block px-3 py-2 hover:bg-blue-600 rounded transition duration-300")}
                            >
                                Contact me
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/console">
                            <button>
                                Terminal
                            </button>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
