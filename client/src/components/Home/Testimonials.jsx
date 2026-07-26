import React from 'react'

const Testimonials = () => {

    const cardsData = [
        {
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
            name: "Sarah Mitchell",
            handle: "@sarah.designs",
            date: "March 12, 2026",
            review: "This resume builder helped me create a professional CV in minutes. The templates made my application stand out instantly."
        },
        {
            image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
            name: "Alex Carter",
            handle: "@alexcareer",
            date: "April 8, 2026",
            review: "I loved how easy it was to edit my resume and share a live link with recruiters instead of sending outdated files."
        },
        {
            image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200",
            name: "James Wilson",
            handle: "@jamescareer",
            date: "May 21, 2026",
            review: "The AI optimization feature improved my resume content and helped me highlight my skills much better."
        },
        {
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200",
            name: "Miles Parker",
            handle: "@emilycareer",
            date: "June 3, 2026",
            review: "Multiple templates, easy customization, and instant downloads. Everything I needed for my job search."
        }
    ];


    const CreateCard = ({ card }) => (
        <div className="p-px rounded-xl bg-white/10 mx-4 shadow-lg w-80 h-56 shrink-0">

            <div className="p-5 h-full rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col">

                <div className="flex gap-3">

                    <img
                        className="size-11 rounded-full object-cover"
                        src={card.image}
                        alt="User"
                    />

                    <div className="flex flex-col">

                        <div className="flex items-center gap-1">

                            <p className="text-sm font-medium text-white">
                                {card.name}
                            </p>

                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                            >
                                <path
                                    fill="#2196F3"
                                    d="M6 0.5L7.6 2.1L9.8 2.3L10 4.5L11.5 6L10 7.5L9.8 9.7L7.6 9.9L6 11.5L4.4 9.9L2.2 9.7L2 7.5L0.5 6L2 4.5L2.2 2.3L4.4 2.1L6 0.5Z"
                                />
                            </svg>

                        </div>

                        <span className="text-xs text-slate-500">
                            {card.handle}
                        </span>

                    </div>

                </div>


                <p className="text-sm text-slate-300 leading-relaxed py-5 line-clamp-3 flex-1">
                    "{card.review}"
                </p>


                <div className="flex justify-between items-center text-xs text-slate-500">

                    <span>
                        Verified user
                    </span>

                    <span>
                        {card.date}
                    </span>

                </div>


            </div>

        </div>
    );



    return (

        <section id="testimonials" className="bg-black overflow-hidden pb-20">


            {/* Badge */}

            <div className="flex justify-center mb-8">

                <div className="rainbow relative z-0 bg-[#0077b6]/15 overflow-hidden p-px flex items-center justify-center rounded-full">

                    <div className="flex items-center gap-3 px-5 py-3 rounded-full bg-[#0077b6]/80 backdrop-blur text-white">

                        <div className="relative flex size-3.5 items-center justify-center">

                            <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping"></span>

                            <span className="relative inline-flex size-2 rounded-full bg-[#90e0ef]"></span>

                        </div>


                        <span className="text-xs">
                            Loved By Job Seekers
                        </span>


                    </div>

                </div>

            </div>




            {/* Heading */}

            <div className="text-center max-w-2xl mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-semibold text-white">
                    Trusted By People Building Their Careers
                </h2>

                <p className="mt-3 text-slate-400 text-sm md:text-base">
                    See how professionals are creating better resumes, landing opportunities, and simplifying their job search.
                </p>

            </div>





            {/* First Row */}

            <div className="relative w-full overflow-hidden mt-12">


                {/* Dark fade */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-linear-to-r from-black to-transparent"></div>

                <div className="marquee-inner flex min-w-[200%]">

                    {
                        [...cardsData,...cardsData].map((card,index)=>(
                            <CreateCard
                                key={index}
                                card={card}
                            />
                        ))
                    }

                </div>


                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-linear-to-l from-black to-transparent"></div>


            </div>





            {/* Second Row */}

            <div className="relative w-full overflow-hidden mt-6">


                <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-linear-to-r from-black to-transparent"></div>


                <div className="marquee-inner marquee-reverse flex min-w-[200%]">

                    {
                        [...cardsData,...cardsData].map((card,index)=>(
                            <CreateCard
                                key={index}
                                card={card}
                            />
                        ))
                    }


                </div>


                <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-linear-to-l from-black to-transparent"></div>


            </div>





            <style>{`

                @keyframes marqueeScroll {

                    0% {
                        transform: translateX(0%);
                    }

                    100% {
                        transform: translateX(-50%);
                    }

                }


                .marquee-inner {

                    animation: marqueeScroll 25s linear infinite;

                }


                .marquee-reverse {

                    animation-direction: reverse;

                }


            `}</style>



        </section>

    )
}


export default Testimonials