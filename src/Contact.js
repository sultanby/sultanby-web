import React from 'react';

const Contact = () => {
    return (
        <div className="flow-root text-4xl mt-10">
            <dl className="-my-3">
                <div className="grid grid-cols-1 gap-1 p-3 pb-10 sm:grid-cols-3 sm:gap-24">
                    <dt className="font-bold text-gray-700 my-auto">+collaborate</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                        <p>looking forward to discussing your projects' ideas and creating smth stunning together</p>
                        <a href='mailto:sultanbekovayulia@gmail.com' className="mt-2 flex items-center group cursor-pointer">
                            <img className="w-16 h-16 rounded-full bg-orange-300 group-hover:hidden" src="sultanby-web/thumb.png" alt="Rounded avatar" />
                            <img className="w-16 h-16 rounded-full bg-orange-300 hidden group-hover:block" src="sultanby-web/macbook.png" alt="Rounded avatar" />
                            <div className="relative w-16 h-16 rounded-full border-4 border-orange-300 overflow-hidden  transition-all duration-300 justify-between items-center group-hover:w-64">
                                <span className="block flex flex-row justify-around items-center w-full h-full text-center ">
                                    <span className="hidden group-hover:block flex-none text-orange-300 mb-0.5 text-xl font-bold">get in touch</span>
                                    <img className="w-6 h-6 transition-transform duration-300 transform group-hover:rotate-45" src="sultanby-web/arrow.png" alt="Rounded avatar" />
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
