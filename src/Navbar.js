import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-6 right-6 bg-blue-500 text-white p-4 bg-light opacity-1 z-50 rounded-full">
            <ul className="flex flex-row items-center gap-4">
                <img className="w-12 h-12 mr-6 rounded-full bg-light" src={`${process.env.PUBLIC_URL}/fist.png`} />
                <li><a>cv</a></li>
                <li><a href="#works">works</a></li>
                <li><Link to={`${process.env.PUBLIC_URL}/blog`}>blog</Link></li>
                <a href='#contact' className="ml-6 border-4 border-orange py-1.5 px-3 rounded-full text-orange font-bold">contact</a>
            </ul>
        </nav>
    );
};

export default Navbar;