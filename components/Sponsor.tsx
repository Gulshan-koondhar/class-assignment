import Image from "next/image";
import React from "react";
import Apple from "@/public/assests/Apple.png";
import Microsoft from "@/public/assests/microsoft 1.png";
import Slack from "@/public/assests/Slack_Technologies_Logo 1.png";
import Google from "@/public/assests/Group 246.png";
const Sponsor = () => {
  return (
    <div className="flex flex-col justify-evenly items-center gap-8 my-20">
      <h1 className="text-black font-bold text-4xl">Our sponsors</h1>
      <div className="flex justify-between items-center gap-24 flex-col lg:flex-row">
        <Image src={Apple} alt="" width={50} />
        <Image src={Microsoft} alt="" width={120} />
        <Image src={Slack} alt="" width={120} />
        <Image src={Google} alt="" width={120} />
      </div>
    </div>
  );
};

export default Sponsor;
