import React from "react";

const Contact = () => {

    return (
        <section id="contact" className="bg-black py-24 px-4 overflow-hidden">

            {/* Badge */}
<div className="flex justify-center mb-8">

                <div className="rainbow relative z-0 bg-[#0077b6]/15 overflow-hidden p-px flex items-center justify-center rounded-full">

                    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#0077b6]/80 backdrop-blur text-white">

                        <div className="relative flex size-3.5 items-center justify-center">

                            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>

                            <span className="relative inline-flex size-2 rounded-full bg-[#90e0ef]"></span>

                        </div>


                        <span className="text-xs">
                            Meet the Developer
                        </span>


                    </div>

                </div>

            </div>


            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Built With Passion To Simplify Your Career Journey
                </h2>

                <p className="mt-3 text-slate-400 text-sm md:text-base">
                    Have questions, feedback, or ideas? I would love to hear from you and help make your resume-building experience better.
                </p>

            </div>



            {/* Cards */}

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14">


                {/* Email */}
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition">

                    <svg 
                        className="text-purple-400 bg-purple-500/20 p-2.5 rounded-full size-11"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/>
                    </svg>


                    <h3 className="text-white font-semibold text-lg mt-5">
                        Reach Out
                    </h3>

                    <p className="text-slate-400 text-sm mt-2">
                        Have feedback or want to discuss the project? Feel free to send a message.
                    </p>

                    <a
                        href="mailto:yourmail@gmail.com"
                        className="inline-block mt-4 text-purple-400 font-medium text-sm hover:underline"
                    >
                        sumitmali7799@gmail.com
                    </a>

                </div>



                {/* Developer */}
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition">


                    <svg 
                        className="text-green-400 bg-green-500/20 p-2.5 rounded-full size-11"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M8 9 3 12l5 3v-2l-3-1 3-1V9Zm8 0v2l3 1-3 1v2l5-3-5-3ZM14 5h-4l-2 14h4l2-14Z"/>
                    </svg>


                    <h3 className="text-white font-semibold text-lg mt-5">
                        Built By A Developer
                    </h3>

                    <p className="text-slate-400 text-sm mt-2">
                        Designed and developed with modern technologies to create a simple resume experience.
                    </p>


                    <span className="inline-block mt-4 text-green-400 font-medium text-sm">
                        MERN Stack
                    </span>


                </div>



                {/* Social */}
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition">


                    <svg 
                        className="text-orange-400 bg-orange-500/20 p-2.5 rounded-full size-11"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 17h-2v-2h2Zm2.07-7.25-.9.92A3 3 0 0 0 13 15h-2v-.5a4 4 0 0 1 1.17-2.83l1.24-1.24A2 2 0 1 0 10 9H8a4 4 0 1 1 7.07 2.75Z"/>
                    </svg>


                    <h3 className="text-white font-semibold text-lg mt-5">
                        Let's Connect
                    </h3>


                    <p className="text-slate-400 text-sm mt-2">
                        Follow the journey, share suggestions, or check out more projects.
                    </p>


                    <div className="flex gap-4 mt-4">

                        <a 
                            href="https://github.com/sumitmali001"
                            className="text-orange-400 text-sm font-medium hover:underline"
                        >
                            GitHub
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/sumitmali/"
                            className="text-orange-400 text-sm font-medium hover:underline"
                        >
                            LinkedIn
                        </a>

                    </div>


                </div>


            </div>


        </section>
    )
}


export default Contact;