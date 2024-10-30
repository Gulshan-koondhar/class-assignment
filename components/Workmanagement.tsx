import { ArrowRight } from "lucide-react";
import React from "react";

const Workmanagement = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="px-2 lg:px-8 flex flex-col gap-4 lg:w-[562px]">
          <h1 className="font-semibold text-4xl  lg:text-5xl text-center lg:text-start w-full text-black">
            Project Management
          </h1>
          <p className="font-normal text-lg text-center lg:text-start text-black">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[160px]">
              Get Started <ArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div className="w-[290px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[350px] bg-[#C4DEFD]"></div>
        </div>
      </div>
    </div>
  );
};

export default Workmanagement;
