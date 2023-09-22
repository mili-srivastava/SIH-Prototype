
//import image
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-2 items-center">
        <h1 className="text-xl font-medium">E-Waste Facility Locator </h1>
        <div className="flex gap-3 items-center">
          <Image
            width={500}
            height={500}
            src="https://img.icons8.com/emoji/48/globe-showing-americas-emoji.png"
            alt="globe-showing-americas-emoji"
            className="w-10 h-10"
          />
          <Image
            width={500}
            height={500}
            src="https://img.icons8.com/stickers/100/search.png"
            alt="search"
            className="w-10 h-10"
          />
        </div>
      </nav>
      <hr className="border-gray-400 " />
    </>
  );
};
export default Navbar;
