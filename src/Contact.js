import React from 'react';

const Contact = () => {
    return (
        <div className="flow-root text-4xl mt-10" id='contact'>
            <dl className="-my-3">
                <div className="grid grid-cols-1 gap-1 p-3 pb-10 sm:grid-cols-3 sm:gap-24">
                    <dt className="font-bold text-black">+collaborate</dt>
                    <dd className="text-blacks sm:col-span-2">
                        <p>looking forward to discussing your projects' ideas and creating smth stunning together</p>
                        <a href='mailto:sultanbekovayulia@gmail.com' className="mt-2 flex items-center group cursor-pointer">
                            <img className="w-16 h-16 rounded-full bg-light group-hover:hidden" src={`${process.env.PUBLIC_URL}/thumb.png`} alt="Rounded avatar" />
                            <img className="w-16 h-16 rounded-full bg-light hidden group-hover:block" src={`${process.env.PUBLIC_URL}/macbook.png`} alt="Rounded avatar" />
                            <div className="relative w-16 h-16 rounded-full border-4 border-orange overflow-hidden  transition-all duration-300 justify-between items-center group-hover:w-64">
                                <span className="block flex flex-row justify-around items-center w-full h-full text-center ">
                                    <span className="hidden group-hover:block flex-none text-orange mb-0.5 text-xl font-bold">get in touch</span>
                                    <img className="w-8 h-8 transition-transform duration-300 transform group-hover:rotate-45" src={`${process.env.PUBLIC_URL}/arrow.png`} alt="Rounded avatar" />
                                </span>
                            </div>
                        </a>
                    </dd>
                </div>
            </dl>
        </div>
    );
};

export default Contact;
