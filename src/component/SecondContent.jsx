import React from "react";

export default function SecondContent(){
    return(
        <div className="content-3-2 flex lg:flex-row flex-col items-center">
            {/*<!-- Left Column -->*/}
            <div className="w-full lg:w-1/2 text-center justify-center flex lg:mb-0 mb-12">
                <img id="hero"
                    src="http://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content3/Content-3-1.png"
                    alt="" />
            </div>
            {/*<!-- Right Column -->*/}
            <div className="lg:w-1/2 w-full flex flex-col lg:items-start items-center lg:text-left text-center">
                <h2 className="md:text-4xl text-3xl font-semibold mb-10 tracking-tight text-medium-black">
                    3 Keys Benefit
                </h2>
                <ul>
                    <li className="mb-8">
                        <h4
                            className="font-medium text-2xl mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center text-medium-black">
                            <span
                                className="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 text-white rounded-full">1</span>
                            Trusted Mentor
                        </h4>
                        <p className="text-base leading-7 tracking-wide caption">
                            We have provided highly experienced mentors<br className="sm:inline-block hidden" />
                            for several years.
                        </p>
                    </li>
                    <li className="mb-8">
                        <h4
                            className="font-medium text-2xl mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center text-medium-black">
                            <span
                                className="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 text-white rounded-full">2</span>
                            Access Forever
                        </h4>
                        <p className="text-base leading-7 tracking-wide caption">
                            Are you busy at work so it's hard to consult? don't<br className="sm:inline-block hidden" />
                            worry because you can access anytime.
                        </p>
                    </li>
                    <li className="mb-16">
                        <h4
                            className="font-medium text-2xl mb-5 flex lg:flex-row flex-col items-center lg:justify-start justify-center text-medium-black">
                            <span
                                className="circle h-12 w-12 text-xl flex items-center justify-center lg:mr-5 lg:mb-0 mb-5 text-white rounded-full">3</span>
                            Halfpenny
                        </h4>
                        <p className="text-base leading-7 tracking-wide caption">
                            We provide economical packages for those of you<br className="sm:inline-block hidden" />
                            who are still in school or workers.
                        </p>
                    </li>
                </ul>
                <button
                    className="btn-fill px-10 py-4 text-base text-white font-semibold rounded-xl cursor-pointer focus:outline-none tracking-wide">
                    Learn More
                </button>
            </div>
        </div>
    )
}