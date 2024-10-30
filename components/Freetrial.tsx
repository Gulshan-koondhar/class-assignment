import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import App_icon from "@/public/assests/App-icon.png";

const Freetrial = () => {
  return (
    <div className="bg-[#043873] py-8">
      <div className="flex justify-center items-center flex-col py-4  mx-auto text-center gap-6">
        <div className="space-y-4">
          <h1 className="font-semibold text-4xl  lg:text-5xl ">
            Try Whitepace <br /> today
          </h1>
          <p className="font-normal text-lg">
            Get started for free <br />
            Add your whole team as your needs grow.
          </p>
        </div>
        <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[190px]">
          Try Taskey Now <ArrowRight />
        </button>
        <p>On a big team? Contact sales</p>
        <div>
          <Image src={App_icon} alt="" width={200} />
        </div>
      </div>
    </div>
  );
};

export default Freetrial;
