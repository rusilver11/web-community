import React from "react";

export default function Product() {
  return (
    <>
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex items-center justify-end">
          
          <svg
            width="316"
            height="560"
            viewBox="0 0 316 560"
            fill="none"
            className="absolute"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="280"
              cy="280"
              r="279"
              stroke="url(#paint0_linear_154:119)"
              stroke-width="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_154:119"
                x1="0"
                y1="0"
                x2="560"
                y2="560"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#36745D" />
                <stop offset="1" stop-color="#155367" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <main className="relative z-30 px-4 pb-0 mx-auto md:pb-28 our-platform pt-36 max-w-screen-2xl lg:px-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="md:col-span-10">
            <h1 className="font-semibold leading-snug text-white-2 md:leading-9 text-40">
              
              Outputs from Our Platform
            </h1>
            <p className="text-xl font-normal leading-8 md:leading-9 md:text-2xl text-grey-1 mt-7">
              
              Our platform specialize on helping our clients work process and
              communication.
              <br /> Below are the products produced using our platform.
            </p>
          </div>
          <div className="mt-2 md:col-span-3 lg:col-span-2 lg:mt-0">
            <div className="text-2xl font-semibold text-left bg-transparent text-white-2 lg:text-right">
              
              <a href="#" className="px-0 py-0 transition duration-500 ease-out rounded-lg cursor-pointer lg:hover:bg-darkTosca lg:py-3 lg:px-6">
                See more
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-flow-col grid-rows-2 gap-4 mt-12 md:gap-10 md:mt-24">
          <div className="row-span-2">
            <img
              src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-1.png"
              alt="workly"
              className="object-cover h-full rounded-lg md:rounded-xl w-px400"
            />
          </div>
          <div className="row-span-1">
            <img
              src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-2.png"
              alt="workly"
              className="object-cover h-full rounded-lg md:rounded-xl w-px400"
            />
          </div>
          <div className="row-span-1">
            <img
              src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-3.png"
              alt="workly"
              className="object-cover h-full rounded-lg md:rounded-xl w-px400"
            />
          </div>
          <div className="row-span-2">
            <img
              src="https://api.elements.buildwithangga.com/storage/files/2/assets/Content/Content-workly/porto-4.png"
              alt="workly"
              className="object-cover h-full rounded-lg md:rounded-xl w-px400"
            />
          </div>
        </div>
      </main>
    </>
  );
}
