import Image from "next/image";
import React from "react";
import Logo from "@/public/assests/Logo.png";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-[#043873] text-white ">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center h-24 px-3">
          <div className="flex gap-3 items-center">
            <div>
              <Image src={Logo} alt="Logo" width={37} height={29} />
            </div>
            <h1 className="font-bold text-lg">whitespace</h1>
          </div>
          <div className="flex justify-between items-center gap-5 2xl:gap-[60px]">
            <ul className="hidden xl:flex xl:gap-8">
              <li className="flex items-center gap-2">
                <Link
                  href="/product"
                  className="text-[18px] leading-6 font-medium"
                >
                  Products
                </Link>
                <ChevronDown />
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/solution"
                  className="text-[18px] leading-6 font-medium"
                >
                  Solutions
                </Link>
                <ChevronDown />
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/resourse"
                  className="text-[18px] leading-6 font-medium"
                >
                  Resources
                </Link>
                <ChevronDown />
              </li>
              <li className="flex items-center gap-2">
                <Link
                  href="/pricing"
                  className="text-[18px] leading-6 font-medium"
                >
                  Pricing
                </Link>
                <ChevronDown />
              </li>
            </ul>

            <div className="lg:flex lg:gap-3 hidden">
              <button className="bg-[#FFE492] py-2 px-10 rounded-lg">
                Login
              </button>
              <button className="bg-[#4F9CF9] py-2 px-6 flex gap-2 rounded-lg">
                Try Whitespace free <ArrowRight />
              </button>
            </div>
            <div className="xl:hidden">
              <Menu className="h-8 w-10" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
