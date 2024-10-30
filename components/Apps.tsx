import { ArrowRight } from "lucide-react";
import React from "react";
import AppsImage from "@/public/assests/Apps.png";
import Image from "next/image";

const Apps = () => {
  return (
    <div className="bg-[#043873] lg:px-8">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
          <div className="px-2 lg:px-8 flex flex-col gap-4 lg:w-[562px]">
            <h1 className="font-semibold text-4xl  lg:text-5xl text-center lg:text-start w-full">
              Work with Your Favorite Apps Using whitepace
            </h1>
            <p className="font-normal text-lg text-center lg:text-start">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[160px]">
                Read More <ArrowRight />
              </button>
            </div>
          </div>
          <div>
            <div className="w-[290px] h-[200px] sm:w-[400px] sm:h-[300px] lg:w-[600px] lg:h-[350px] ">
              <Image src={AppsImage} alt="" width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
