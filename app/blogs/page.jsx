import Blog from "@/props/Blog";
import Image from "next/image";
import Link from "next/link";
//import icons

import { PiPencilLineLight } from "react-icons/pi";
import { HiPencilSquare } from "react-icons/hi";
import { CreateBlog } from "@/components/createBlogs/CreateBlog";

const page = () => {
  return (
    <div className="py-4">
      <div className="flex justify-end pr-5 pb-5">
        <Link href="/blogs/create">
          <button className="bg-primary py-2 rounded-lg flex items-center text-white gap-1 px-2">
            <PiPencilLineLight className="text-white text-xl" />
            Create Blog
          </button>
        </Link>
      </div>
      <div className="text-center pb-3 lg:-mt-14">
        <p className="text-2xl font-medium lg:text-3xl">
          Join the Eco Community!
        </p>
        <p className="text-sm py-3 px-5 lg:text-lg text-gray-600">
          Explore e-waste management blogs by experts and our community. Expand
          your knowledge. Join us.
        </p>
      </div>
      {/* ---featured blogs----  */}
      <p className="text-2xl font-medium flex items-center px-10 py-3">
        Featured Blogs<span className="text-4xl">🌟</span>
      </p>
      <div className="flex justify-center items-center px-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Blog
            image="/images/blogs/blog1.jpg"
            title=" Explore the detrimental effects of electronic waste on "
            desc="Explore the detrimental effects of electronic waste on our planet, from toxic materials to landfill overflow, and discover sustainable solutions."
          />
          <Blog
            image="/images/blogs/blog2.jpg"
            title=" E-Waste Recycling: Turning Trash into Treasure "
            desc="Dive into the world of e-waste recycling, uncovering how old gadgets can be transformed into valuable resources while reducing pollution."
          />
          <Blog
            image="/images/blogs/blog3.png"
            title=" The Dark Side of Electronics: E-Waste's Human Toll"
            desc="Investigate the often-overlooked human consequences of electronic waste, from unsafe disposal practices to health hazards faced by recycling workers."
          />
        </div>
      </div>

      {/* -----blogs---- */}
      <p className="text-2xl font-medium px-10 flex items-center py-5">
        More Blogs
        <span className="text-4xl">📝</span>
      </p>

      <div className="flex justify-center items-center px-10 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Blog
            image="/images/blogs/blog4.jpg"
            title=" E-Waste Management: A Global Challenge and Responsibility"
            desc="Explore the hidden dangers of improper e-waste disposal and its grave consequences on our well-being and planet."
          />
          <Blog
            image="/images/blogs/blog4.jpg"
            title=" The Silent Threat: Unveiling E-Waste's Impact on Health and the Environment"
            desc="Learn about the global e-waste crisis and how it affects developing countries, and discover how you can help solve this growing problem."
          />
          <Blog
            image="/images/blogs/blog5.jpg"
            title=" Recycling Electronics: A Sustainable Solution for a Greener Tomorrow"
            desc="Learn about the global e-waste crisis and how it affects developing countries, and discover how you can help solve this growing problem."
          />
          <Blog
            image="/images/blogs/blog6.jpg"
            title=" E-Waste Management: E-Waste: The Toxic Legacy We Must Confront"
            desc="Delve into the toxic components of e-waste, their lingering effects on our environment, and the urgent need for responsible disposal"
          />
          <Blog
            image="/images/blogs/blog7.jpeg"
            title=" From Gadgets to Green Gold: Uncovering the Precious Metals in E-Waste"
            desc="Learn about the valuable metals hidden within electronic devices and how recycling can turn e-waste into a valuable resource"
          />
          <Blog
            image="/images/blogs/blog8.png"
            title=" The Power of Community: How Collective Efforts Can Tackle the E-Waste Crisis"
            desc="Explore how community-driven initiatives and shared knowledge are instrumental in combatting the global e-waste challenge."
          />
        </div>
      </div>
    </div>
  );
};

export default page;
