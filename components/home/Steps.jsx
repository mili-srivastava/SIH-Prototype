import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className="mt-8 bg-green-100 py-10 ">
      <p className="text-center text-3xl font-bold text-primary ">
        Recycle Your Waste in 4 Simple Steps
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center mt-10 ">
        <div className="flex flex-col items-center justify-center">
          <div className="mt-10 flex items-center justify-center">
            <Image
              src="/images/location.jpg"
              width={500}
              height={500}
              alt=""
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex items-center">
          <p className="rounded-full flex justify-center items-center text-white font-bold bg-primary w-10 h-10">1</p>
          <p className="w-56 text-center text-xl font-medium mt-2">
            Find NearestE-Waste Collection Point.
          </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/pickup.avif"
              width={500}
              height={500}
              alt=""
              className="rounded-full w-28 h-28 object-cover"
            />
          </div>
          <div className="flex items-center">
          <p className="rounded-full flex justify-center items-center text-white font-bold bg-primary w-10 h-10">2</p>
          <p className="w-56 text-center text-xl font-medium mt-2">
          Book a Convenient Pickup
          </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <Image
              src="/images/credit.png"
              width={500}
              height={500}
              alt=""
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex items-center gap-2">
          <p className="rounded-full flex justify-center items-center text-white font-bold bg-primary w-10 h-10">3</p>
          <p className="w-56 text-center text-xl font-medium mt-2">
          Calculate Your Recycling Credits
          </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-10 flex items-center justify-center">
            <Image
              src="/images/recycle.png"
              width={500}
              height={500}
              alt=""
              className="rounded-full w-24 h-24 object-cover"
            />
          </div>
          <div className="flex items-center">
          <p className="rounded-full flex justify-center items-center text-white font-bold bg-primary w-10 h-10">4</p>
          <p className="w-56 text-center text-xl font-medium mt-2">
          Environmentally Responsible Recycling
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
