import React from 'react';

const Skills = () => {
    return (
        <div className="flow-root text-4xl mt-10">
            <dl className="-my-3">
                <div className="grid grid-cols-1s px-3 py-10 sm:grid-cols-3 sm:gap-24">
                    <dt>
                        <h2 class="text-3xl text-black font-bold lg:text-4xl">
                            +skills
                        </h2>
                        <div className="mt-3 flex flex-wrap flex-col gap-2">
                            <span className="py-1.5 px-3  text-gray border-4 border-orange text-xs sm:text-sm rounded-full">
                                TypeScript
                            </span>
                            <span className="py-1.5 px-3  text-gray border-4 border-orange text-xs sm:text-sm rounded-full">
                                React
                            </span>
                            <span className="py-1.5 px-3  text-gray border-4 border-orange text-xs sm:text-sm rounded-full">
                                Node.js
                            </span>
                            <span className="py-1.5 px-3  text-gray border-4 border-orange text-xs sm:text-sm rounded-full">
                                Tailwind
                            </span>
                        </div>
                    </dt>

                    <dd className="text-black text-xl sm:col-span-2 ">
                        <p>
                            My motivation to work as a web developer stems from a passion for creating innovative and user-centric digital experiences. With a keen eye for detail and a drive for continuous learning, I am committed to mastering the latest technologies and best practices in web development.
                        </p>
                        <br/>
                        <p>
                            My strong problem-solving skills, coupled with effective communication and teamwork abilities, enable me to tackle complex challenges and collaborate seamlessly with cross-functional teams. Above all, I am driven by the opportunity to leverage technology to make a positive impact and deliver high-quality solutions that exceed user expectations.
                        </p>
                    </dd>
                </div>
            </dl>
        </div>

    );
};

export default Skills;
