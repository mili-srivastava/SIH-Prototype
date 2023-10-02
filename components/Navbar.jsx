"use client";
//import image
import Image from "next/image";

//import link
import Link from "next/link";
//import state
import { useState } from "react";

//import icons
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <>
      <nav className="flex justify-between items-center pl-1 pr-3">
        <Image
          src="/images/2.png"
          width={500}
          height={500}
          alt="logo"
          className="w-24"
        />
        <div className="hidden sm:flex gap-5">
          <Link
            href="/"
            className="hover:text-primary text-xl hover:font-bold hover:underline"
          >
            Home
          </Link>
          <Link
            href="/location"
            className="hover:text-primary text-xl hover:font-bold hover:underline"
          >
            Location
          </Link>
          <Link
            href="/credits"
            className="hover:text-primary text-xl hover:font-bold hover:underline"
          >
            Credits
          </Link>
          <Link
            href="/blogs"
            className="hover:text-primary text-xl hover:font-bold hover:underline"
          >
            Blogs
          </Link>
        </div>

        {/* mobile menu */}
        <div>
          <HiMenu
            onClick={setMenu}
            className="sm:hidden text-3xl text-primary cursor-pointer"
          />
        </div>
        <div
          className={
            menu
              ? `absolute bg-secondary text-white rounded-lg w-40 h-44 py-5 top-24 right-2 `
              : `hidden`
          }
        >
          <RxCross2
            onClick={closeMenu}
            className="text-2xl cursor-pointer float-right mr-3"
          />
          <br />
          <div className="flex flex-col text-center">
            <Link
              href="/"
              className="font-medium text-lg  hover:font-bold hover:underline"
            >
              Home
            </Link>
            <Link
              href="/location"
              className="font-medium text-lg  hover:font-bold hover:underline"
            >
              Location
            </Link>
            <Link
              href="/credits"
              className="font-medium text-lg  hover:font-bold hover:underline"
            >
              Credits
            </Link>
            <Link
              href="/blogs"
              className="font-medium text-lg  hover:font-bold hover:underline"
            >
              Blogs
            </Link>
          </div>
        </div>
      </nav>
      <hr className="border-gray-400 " />
    </>
  );
};
export default Navbar;
