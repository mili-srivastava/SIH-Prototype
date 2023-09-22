// Desc: Blog component that takes in props and renders an image with an alt attribute.
// import image
import Image from "next/image";
import Link from "next/link";

const Blog = (props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href="/">
        <Image
          className="rounded-t-lg"
          src={props.image}
          alt="blog-image"
          width={500}
          height={500}
        />
      </Link>
      <div class="p-5">
        <Link href="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.desc}
        </p>
        <Link
          href="/"
          
        >
          <button className="flex items-center bg-green-500 text-white text-lg mx-auto my-5"> Read More
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
