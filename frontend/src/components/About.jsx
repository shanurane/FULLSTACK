import React from "react";

const About = () => {
  return (
    <div>
      <div className="h-[77vh] flex">
        <div className="w-1/2 flex p-16 pt-40 pl-32 justify-center">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl text-sky-500">
              Not Your Average Realtor
            </h1>
            <p className="text-zinc-700">
              Revolutionizing the way you buy, sell, and invest in real estate.
              At Real Trust, we blend innovation, expertise, and a personalized
              approach to deliver unmatched results. Whether you&apos;re
              searching for your dream home, maximizing your property&apos;s
              value, or making savvy investments, we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute top-24 left-10 w-1/2">
            <img src="imgs/Ellipse 11.svg" alt="" />
          </div>
          <div className="absolute right-16 top-10 w-1/3">
            <img src="imgs/Ellipse 12.svg" alt="" />
          </div>
          <div className="absolute right-20 bottom-3 w-1/3">
            <img src="imgs/Ellipse 13.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="font-bold text-3xl text-sky-500 p-1">Why Choose Us?</h1>
        <div className="bg-sky-500 w-32 h-[6px] text-2xl rounded-sm m-1"></div>
        <div className="flex w-full justify-around text-center p-10">
          <div className="w-1/4 text-center flex flex-col items-center">
            <img
              src="logo/home.svg"
              alt="icon"
              className="p-2 rounded-full bg-sky-500/5 w-12"
            />
            <h2 className="font-bold text-2xl text-sky-500 p-2">
              Potential ROI
            </h2>
            <p className="text-zinc-700">
              Discover unparalleled growth opportunities with our cutting-edge
              solutions. By leveraging advanced analytics and innovative
              strategies, our services are designed to deliver a measurable
              return on investment (ROI).
            </p>
          </div>
          <div className="w-1/4 text-center flex flex-col items-center">
            <img
              src="logo/paintbrush-2.svg"
              alt="icon"
              className="p-2 rounded-full bg-sky-500/5 w-12"
            />
            <h2 className="font-bold text-2xl text-sky-500 p-2">Design</h2>
            <p className="text-zinc-700">
              Our design philosophy combines creativity with functionality,
              ensuring your brand stands out while staying intuitive for your
              audience.
            </p>
          </div>
          <div className="w-1/4 text-center flex flex-col items-center">
            <img
              src="logo/circle-dollar-sign.svg"
              alt="icon"
              className="p-2 rounded-full bg-sky-500/5 w-12"
            />
            <h2 className="font-bold text-2xl text-sky-500 p-5">Marketing</h2>
            <p className="text-zinc-700">
              Transform your brand presence with our comprehensive marketing
              strategies. From content creation to targeted campaigns, we help
              you connect with the right audience, at the right time, on the
              right platforms.
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-[60vh]">
        <div className="w-1/3 flex justify-end items-start">
          <img
            src="imgs/pexels-brett-sayles-2881232.svg"
            alt="image"
            className="w-1/2"
          />
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <img
            src="imgs/pexels-andres-ayrton-6578391.svg"
            alt=""
            className="w-[80%]"
          />
        </div>
        <div className="w-1/3 flex justify-start items-end">
          <img src="imgs/pexels-fauxels-3182834.svg" alt="" className="w-1/2" />
        </div>
      </div>
      <div className="h-[50vh] text-center flex flex-col justify-center items-center pt-5">
        <h1 className="font-bold text-3xl text-sky-500 p-1">About Us</h1>
        <div className="bg-sky-500 w-32 h-[6px] text-2xl rounded-md m-1"></div>
        <p className="text-zinc-700 p-4 w-[60%]">
          At Real Trust, we&apos;re more than just a team - we&apos;re
          innovators, dreamers, and doers dedicated to creating solutions that
          matter. Our journey began with a simple vision: to transform
          challenges into opportunities and ideas into impactful realities.
        </p>
        <button className="m-3 border border-sky-500 border-b-[3px] border-r-[3px] text-sky-500 font-bold rounded-md px-20 p-2">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default About;
