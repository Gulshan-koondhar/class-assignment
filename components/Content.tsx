import { ArrowRight } from "lucide-react";
import React from "react";
import Content_image from "@/public/assests/Work Together Image.png";
import Image from "next/image";

const Content = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-12 px-4">
        <div className="px-2 lg:px-8 flex flex-col gap-4 lg:w-[562px]">
          <h1 className="font-semibold text-4xl  lg:text-5xl text-center lg:text-start w-full text-black">
            Work together
          </h1>
          <p className="font-normal text-lg text-center lg:text-start text-black">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[150px]">
              Try it now <ArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center w-full">
            <Image
              src={Content_image}
              alt=""
              className="ml-8"
              width={270}
              height={270}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
