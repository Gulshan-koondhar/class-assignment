import Image from "next/image";
import React from "react";
import Logo from "@/public/assests/Logo.png";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#043873] px-8 py-6">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col xl:flex-row  justify-between gap-10">
          <div className="w-[200px]md:w-[600px] xl:w-60">
            <div className="flex gap-2 mb-4">
              <Image src={Logo} alt="Logo" width={26} />
              <h1>whitespace</h1>
            </div>
            <p>
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-lg mb-4">Product</h1>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer Service</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-lg mb-4 ">Resources</h1>
            <ul>
              <li>Blogs</li>
              <li>Guides & Tutorials</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div>
            <h1 className="font-semibold text-lg mb-4">Company</h1>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Media Kit</li>
            </ul>
          </div>
          <div className="w-full lg:w-64 flex flex-col gap-4">
            <h1 className="font-extrabold text-lg">Try It Today</h1>
            <p>Get started for free. Add your whole team as your needs grow.</p>
            <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg w-[160px]">
              Start Today <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
