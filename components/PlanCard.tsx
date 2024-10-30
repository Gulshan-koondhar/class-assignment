import React from "react";
import icon from "@/public/assests/Icon.png";
import icon1 from "@/public/assests/Icon1.png";
import Image from "next/image";

const PlanCard = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex justify-center items-center flex-wrap gap-6">
        <div className="ring-2 ring-[#FFE492] rounded">
          <div className="px-2 lg:px-5 py-6 flex flex-col gap-4">
            <h1 className="text-black text-left font-semibold text-2xl">
              Free
            </h1>
            <p className="text-black text-left font-bold text-4xl">$0</p>
            <p className="text-black text-left font-medium text-lg ">
              Capture ideas and find them quickly
            </p>
            <div className="flex flex-col gap-3 w-64">
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">Sync unlimited devices</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">10 GB monthly uploads</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">200 MB max. note size</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={10}
                  height={10}
                />
                <p className="text-black ">
                  Customize Home dashboard and access extra widgets
                </p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">
                  Connect primary Google Calendar account
                </p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">
                  Add due dates, reminders, and notifications to your tasks
                </p>
              </div>
            </div>
            <button className="px-10 py-4 ring-2 ring-[#FFE492]  text-black w-40 rounded">
              Get Started
            </button>
          </div>
        </div>
        <div>
          <div className=" rounded">
            <div className="px-2 lg:px-5 py-16 rounded flex flex-col gap-4 bg-[#043873]">
              <h1 className="text-white text-left font-semibold text-2xl">
                Personal
              </h1>
              <p className="text-[#FFE492] text-left font-bold text-4xl">$0</p>
              <p className="text-white text-left font-medium text-lg ">
                Keep home and family on track
              </p>
              <div className="flex flex-col gap-3 w-72">
                <div className="flex gap-4">
                  <Image
                    src={icon1}
                    alt=""
                    className="h-5 w-5 "
                    width={18}
                    height={18}
                  />
                  <p className="text-white">Sync unlimited devices</p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={icon1}
                    alt=""
                    className="h-5 w-5"
                    width={18}
                    height={18}
                  />
                  <p className="text-white">10 GB monthly uploads</p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={icon1}
                    alt=""
                    className="h-5 w-5"
                    width={18}
                    height={18}
                  />
                  <p className="text-white">200 MB max. note size</p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={icon1}
                    alt=""
                    className="h-5 w-5"
                    width={10}
                    height={10}
                  />
                  <p className="text-white ">
                    Customize Home dashboard and access extra widgets
                  </p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={icon1}
                    alt=""
                    className="h-5 w-5"
                    width={18}
                    height={18}
                  />
                  <p className="text-white">
                    Connect primary Google Calendar account
                  </p>
                </div>
                <div className="flex gap-4">
                  <Image
                    src={icon1}
                    alt=""
                    className="h-5 w-5"
                    width={18}
                    height={18}
                  />
                  <p className="text-white">
                    Add due dates, reminders, and notifications to your tasks
                  </p>
                </div>
              </div>
              <button className="px-10 py-4  bg-[#4f9cf9]  text-black w-40 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="ring-2 ring-[#FFE492] rounded">
          <div className="px-2 lg:px-5 py-6 flex flex-col gap-4">
            <h1 className="text-black text-left font-semibold text-2xl">
              Organization
            </h1>
            <p className="text-black text-left font-bold text-4xl">$49.99</p>
            <p className="text-black text-left font-medium text-lg ">
              Capture ideas and find them quickly
            </p>
            <div className="flex flex-col gap-3 w-72">
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">Sync unlimited devices</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">10 GB monthly uploads</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">200 MB max. note size</p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={10}
                  height={10}
                />
                <p className="text-black ">
                  Customize Home dashboard and access extra widgets
                </p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">
                  Connect primary Google Calendar account
                </p>
              </div>
              <div className="flex gap-4">
                <Image
                  src={icon}
                  alt=""
                  className="h-5 w-5"
                  width={18}
                  height={18}
                />
                <p className="text-black">
                  Add due dates, reminders, and notifications to your tasks
                </p>
              </div>
            </div>
            <button className="px-10 py-4 ring-2 ring-[#FFE492]  text-black w-40 rounded">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
