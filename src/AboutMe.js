import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
    return (
        <div className="flow-root text-4xl mt-10 h-screen">
            <dl className="-my-3">
                <div className="grid grid-cols-1 gap-1 p-3 pb-10 sm:grid-cols-3 sm:gap-24">
                    <dt className="font-bold text-black my-auto">yulia sultanbekova</dt>
                    <dd className="sm:col-span-2 relative">
                        <div className="flex items-center group cursor-pointer">
                            <img className="w-16 h-16 rounded-full bg-navajo group-hover:hidden" src={`${process.env.PUBLIC_URL}/thumb.png`} alt="Rounded avatar" />
                            <img className="w-16 h-16 rounded-full bg-navajo hidden group-hover:block" src={`${process.env.PUBLIC_URL}/macbook.png`} alt="Rounded avatar" />
                            <div className="relative w-16 h-16 rounded-full border-4 border-orange overflow-hidden  transition-all duration-300 justify-between items-center group-hover:w-64">
                                <span className="block flex flex-row justify-around items-center w-full h-full text-center ">
                                    <span className="hidden group-hover:block flex-none text-orange mb-0.5 text-xl font-bold">contact me</span>
                                    <img className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-45" src={`${process.env.PUBLIC_URL}/arrow.png`} alt="Rounded avatar" />
                                </span>
                            </div>
                        </div>
                    </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-24">
                    <dt className="font-bold text-black">a fullstack developer</dt>
                    <dd className="text-gray sm:col-span-2">
                        with a unique background in chemical engineering skilled in creating advanced web and application solutions. my expertise is further enriched by ongoing skill advancement and effective multilingual communication in the dynamic tech field.
                    </dd>
                </div>

                <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-24">
                    <dt></dt>
                    <dd className="text-gray text-2xl sm:col-span-2 underline">
                        <div><Link to={`${process.env.PUBLIC_URL}/blog`}>read my blog</Link></div>
                    </dd>
                </div>
            </dl>
        </div>
    );
};

export default AboutMe;
