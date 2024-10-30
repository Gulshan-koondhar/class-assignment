import { ArrowRight } from "lucide-react";
import React from "react";

const Extension = () => {
  return (
    <div className="bg-[#043873] lg:px-8">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="px-2 lg:px-8 flex flex-col gap-4 lg:w-[562px]">
            <h1 className="font-semibold text-4xl  lg:text-5xl text-center lg:text-start w-full">
              Use as Extension
            </h1>
            <p className="font-normal text-lg text-center lg:text-start">
              Use the web clipper extension, available on Chrome and Firefox, to
              save web pages or take screenshots as notes.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[140px]">
                Let&apos;s Go <ArrowRight />
              </button>
            </div>
          </div>
          <div>
            <div className="w-[290px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[350px] bg-[#C4DEFD]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extension;
