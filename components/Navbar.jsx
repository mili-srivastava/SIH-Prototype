
//import image
import Image from "next/image";

//import icons
import { ImSearch } from "react-icons/im";
import { IoEarth } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-2 items-center">
        <h1 className="text-xl font-medium">E-Waste Facility Locator </h1>
        <div className="flex gap-5 items-center">
          <IoEarth className="text-3xl text-green-600" />
          <ImSearch className="text-3xl text-blue-600"/>
        </div>
      </nav>
      <hr className="border-gray-400 " />
    </>
  );
};
export default Navbar;
