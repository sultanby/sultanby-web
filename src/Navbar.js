import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed top-6 right-6 bg-blue-500 text-white p-4 bg-light opacity-1 z-50 lg:rounded-full rounded-2xl flex items-center justify-between ${isOpen ? 'flex-col' : ''}`}>
            <div className="flex items-center justify-between w-full lg:w-auto">
                <img className="w-12 h-12 mr-6 rounded-full bg-light" src={`${process.env.PUBLIC_URL}/fist.png`} alt="Logo" />
                <button
                    onClick={toggleMenu}
                    className="lg:hidden flex items-center px-3 py-2 rounded text-white"
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <ul className={`lg:flex lg:flex-row items-center gap-1 lg:gap-4 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <li><a href='https://www.linkedin.com/in/yulia-sultanbekova/' className="block lg:inline-block mt-4 lg:mt-0">cv</a></li>
                <li><HashLink smooth to={`${process.env.PUBLIC_URL}/#works`} className="block lg:inline-block mt-4 lg:mt-0" onClick={() => setIsOpen(false)}>works</HashLink></li>
                <li><Link to={`${process.env.PUBLIC_URL}/blog`} className="block lg:inline-block mt-4 lg:mt-0" onClick={() => setIsOpen(false)}>blog</Link></li>
                <li>
                    <HashLink smooth to={`${process.env.PUBLIC_URL}/#contact`} className="mt-4 lg:mt-0 border-4 border-orange py-1.5 px-3 rounded-full text-orange font-bold block lg:inline-block" onClick={() => setIsOpen(false)}>
                        contact
                    </HashLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
