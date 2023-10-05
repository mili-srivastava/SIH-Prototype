// Desc: Blog component that takes in props and renders an image with an alt attribute.
// import image
import Image from "next/image";
import Link from "next/link";

//import icons
import { FcLike } from "react-icons/fc";
import { BiCommentDetail } from "react-icons/bi";
import { FaShare } from "react-icons/fa";

const Blog = (props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* ------Image section--- */}
      <div className="">
      <Link href="/">
        <Image
          className="rounded-t-lg h-48 object-cover w-full"
          src={props.image}
          alt="blog-image"
          width={500}
          height={500}
          
        />
      </Link>
      </div>
      <div className="px-5 py-2">
        {/* -----Title section----- */}

        <Link href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </Link>

        {/* ----------------Description section------- */}

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.desc}
        </p>

        {/* ------------------Read more button------------ */}

        <Link href="/">
          <button className="flex items-center bg-green-500 text-white text-lg mx-auto my-5 px-2 py-1 rounded-lg">
            {" "}
            Read More
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className="flex justify-between px-12 pb-6">
        <FcLike className="text-2xl cursor-pointer" />
        <BiCommentDetail className="text-2xl cursor-pointer" />
        <FaShare className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Blog;
