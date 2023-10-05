//import props
import Blog from "@/props/Blog";

const BlogContent = () => {
  return (
    <div className="px-3 mt-28">
    <p className="font-bold text-3xl mb-10 text-center">Explore e-waste&apos;s hidden truths today!</p>
     <div className="justify-center items-center px-10">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
     <Blog
        image="/images/blogs/blog1.jpg"
        title=" Explore the detrimental effects of electronic waste on "
        desc="Explore the detrimental effects of electronic waste on our planet, from toxic materials to landfill overflow, and discover sustainable solutions."
      />
      <Blog
        image="/images/blogs/blog2.jpg"
x
        desc="Dive into the world of e-waste recycling, uncovering how old gadgets can be transformed into valuable resources while reducing pollution."
      />
      <Blog
        image="/images/blogs/blog3.png"
        title=" The Dark Side of Electronics: E-Waste's Human Toll"
        desc="Investigate the often-overlooked human consequences of electronic waste, from unsafe disposal practices to health hazards faced by recycling workers."
      />
      
     </div>
     </div>
    </div>
  );
};

export default BlogContent;
