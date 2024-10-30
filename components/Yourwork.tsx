import { ArrowRight } from "lucide-react";
import React from "react";

const Yourwork = () => {
  return (
    <div className="bg-[#043873] lg:px-8">
      <div className="max-w-screen-xl mx-auto py-10">
        <div className="">
          <div className="px-6 lg:px-8 flex flex-col gap-4 justify-center items-center">
            <h1 className="font-semibold text-4xl  lg:text-5xl text-center ">
              Your work, everywhere you are
            </h1>
            <p className="font-normal text-lg text-center ">
              Access your notes from your computer, phone or tablet by
              synchronising with various services, including whitepace, Dropbox
              and OneDrive. The app is available on Windows, macOS, Linux,
              Android and iOS. A terminal app is also available!
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[155px]">
                Try Taskey <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourwork;
