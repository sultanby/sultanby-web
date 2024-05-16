import React from 'react';

const Skills = () => {
    return (

        <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div class="grid md:grid-cols-2 gap-12">
                <div class="lg:w-3/4">
                    <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl text-white">
                        +skills
                    </h2>
                    <div className="mt-3 flex flex-wrap flex-col gap-2">
                            <span className="py-1.5 px-3 bg-white text-gray-600 border-4 border-orange-300 text-xs sm:text-sm rounded-full">
                                TypeScript
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border-4 border-orange-300 text-xs sm:text-sm rounded-full">
                                React
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border-4 border-orange-300 text-xs sm:text-sm rounded-full">
                                Node.js
                            </span>
                            <span className="py-1.5 px-3 bg-white text-gray-600 border-4 border-orange-300 text-xs sm:text-sm rounded-full">
                                Tailwind
                            </span>
                        </div>
                </div>


                <div class="space-y-6 lg:space-y-10">

                    <p>
                    My motivation to work as a web developer stems from a passion for creating innovative and user-centric digital experiences. With a keen eye for detail and a drive for continuous learning, I am committed to mastering the latest technologies and best practices in web development. 
                    </p>
                    <p>
                    My strong problem-solving skills, coupled with effective communication and teamwork abilities, enable me to tackle complex challenges and collaborate seamlessly with cross-functional teams. Above all, I am driven by the opportunity to leverage technology to make a positive impact and deliver high-quality solutions that exceed user expectations.
                    </p>

                </div>

            </div>

        </div>


    );
};

export default Skills;
