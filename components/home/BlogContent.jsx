// import props

import Blog from "@/props/Blog";

const BlogContent = () => {
  return (
    <div className="px-3 mt-28">
    <p className="font-bold text-3xl mb-10">Explore e-waste&apos;s hidden truths today!</p>
     <div className="flex flex-col gap-16 grid-cols-1 px-2">
     <Blog
        image="/images/blog1.jpg"
        title=" Explore the detrimental effects of electronic waste on "
        desc="Explore the detrimental effects of electronic waste on our planet, from toxic materials to landfill overflow, and discover sustainable solutions."
      />
      <Blog
        image="/images/blog2.jpg"
        title=" E-Waste Recycling: Turning Trash into Treasure "
        desc="Dive into the world of e-waste recycling, uncovering how old gadgets can be transformed into valuable resources while reducing pollution."
      />
      <Blog
        image="/images/blog3.png"
        title=" The Dark Side of Electronics: E-Waste's Human Toll"
        desc="Investigate the often-overlooked human consequences of electronic waste, from unsafe disposal practices to health hazards faced by recycling workers."
      />
      <Blog
        image="/images/blog4.jpg"
        title=" E-Waste Management: A Global Challenge and Responsibility"
        desc="Learn about the global e-waste crisis and how it affects developing countries, and discover how you can help solve this growing problem."
      />
     </div>
    </div>
  );
};

export default BlogContent;
