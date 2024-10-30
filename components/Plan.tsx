import React from "react";
import PlanCard from "./PlanCard";

const Plan = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-black font-semibold text-4xl  lg:text-5xl text-center ">
          Choose Your Plan
        </h1>
        <p className="text-black font-normal text-lg text-center max-w-4xl">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>
      <div className="flex mt-8">
        <PlanCard />
      </div>
    </div>
  );
};

export default Plan;
