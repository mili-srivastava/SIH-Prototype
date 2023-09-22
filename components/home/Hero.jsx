
//import image
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-8 px-5 ">
      <div className=" justify-center flex flex-col gap-5  mb-5 text-center">
        <p className="text-2xl font-medium">
          Discover, Dispose, Preserve: E-Waste Locator App - Saving Tomorrow
          Today!
        </p>
        <p className="text-gray-700 text-xs  ">
          Find the closest E-Waste facility near you, and recycle your old
          devices responsibly.
        </p>
        <Link href="/">
            <button className="bg-primary text-white font-bold py-2 px-4 rounded-xl flex mx-auto">
                Get Started
            </button>
        </Link>
      </div>
      <Image
        src="/images/bg-2.png"
        alt="dustbin"
        width={500}
        height={500}
        className="w-full mx-auto"
      />
    </div>
  );
};

export default Hero;
