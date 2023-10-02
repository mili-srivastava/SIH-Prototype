import Image from "next/image";

const Location = () => {
  return (
    <div className="px-3 mt-28">
      <p className="font-bold text-3xl ">
        Find the E-Waste recycler in your area!
      </p>
      <Image
        src="/images/map.jpg"
        width={500}
        height={500}
        alt="map"
        className="py-8"
      />

      <div>
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md "
              placeholder="Search for E-Waste Recycler..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-500  rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
        <button className="mx-auto flex bg-green-500 px-5 text-white my-8">Explore More</button>
      </div>
    </div>
  );
};

export default Location;
