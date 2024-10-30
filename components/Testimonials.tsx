import Image from "next/image";
import React from "react";
import Quote from "@/public/assests/Quote1.png";
import Quote1 from "@/public/assests/Quote.png";
import Avatar1 from "@/public/assests/Avater1.png";
import Avatar2 from "@/public/assests/Avater2.png";
import Avatar3 from "@/public/assests/Avater.png";

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-black font-semibold text-4xl  lg:text-5xl text-center mb-12">
          What Our Clients Says
        </h1>
        <div className="flex gap-8 flex-wrap justify-center ">
          <div className="w-72 lg:w-80 ring-1 space-y-4 p-4 rounded">
            <div className="space-y-10">
              <Image src={Quote} alt="" />
              <p className="text-black mb-3">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={Avatar1} alt="" />
              <div>
                <h1 className="text-black">Oberon Shaw, MCH</h1>
                <p className="text-black">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 lg:w-80 ring-1 space-y-4 p-4 rounded  bg-[#4F9CF9]">
            <div className="space-y-10">
              <Image src={Quote1} alt="" />
              <p className="text-white mb-3">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={Avatar2} alt="" />
              <div>
                <h1 className="text-[#043873] font-semibold">
                  Oberon Shaw, MCH
                </h1>
                <p className="text-white">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
          <div className="w-72 lg:w-80 ring-1 space-y-4 p-4 rounded bg-[#4F9CF9]">
            <div className="space-y-10">
              <Image src={Quote1} alt="" />
              <p className="text-white mb-3">
                Whitepate is designed as a collaboration tool for businesses
                that is a full project management solution.
              </p>
            </div>
            <hr />
            <div className="flex gap-4 items-center">
              <Image src={Avatar3} alt="" />
              <div>
                <h1 className="text-[#043873] font-semibold">
                  Oberon Shaw, MCH
                </h1>
                <p className="text-white">
                  Head of Talent Acquisition, North America
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
