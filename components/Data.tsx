import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import DataImg from "@/public/assests/data.png";

const Data = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="px-2 lg:px-8 flex flex-col gap-4 lg:w-[562px]">
          <h1 className="font-semibold text-4xl  lg:text-5xl text-center lg:text-start w-full text-black">
            100% your data
          </h1>
          <p className="font-normal text-lg text-center lg:text-start text-black">
            The app is open source and your notes are saved to an open format,
            so you&apos;ll always have access to them. Uses End-To-End
            Encryption (E2EE) to secure your notes and ensure no-one but
            yourself can access them.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[160px]">
              Read More <ArrowRight />
            </button>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center w-full">
            <Image src={DataImg} alt="" width={500} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
