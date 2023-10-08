"use client";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Button, Typography } from "@material-tailwind/react";
import Link from "next/link";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CreateBlog = () => {
  // const [blogs, setBlogs] = useState('');
  const [blogs, setBlogs] = useState({
    title: "",
    description: "",
    content: "",
  });
  // const [thumbnail, setthumbnail] = useState();

  //* Add Post Function
  const addPost = async () => {
    if (
      blogs.title === "" ||
      blogs.description === "" ||
      blogs.content === "" ||
      blogs.thumbnail === ""
    ) {
      toast.error("Please Fill All Fields");
    }
    // console.log(blogs.content)
    // uploadImage()
  };

  const [text, settext] = useState("");
  console.log("Value: ");
  console.log("text: ", text);

  return (

    <div className=" container mx-auto max-w-5xl py-6">
      <div className="px-5">
      <p className="text-center text-3xl pb-6 font-medium text-primary ">Join us in sharing your insights!</p>
        {/* Top Item  */}
        
        {/* main Content  */}
        <div className="mb-3">
          {/* Text  */}
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-semibold"
          >
            Upload Thumbnail
          </Typography>
          {/* First Thumbnail Input  */}
          <input
            type="file"
            label="Upload thumbnail"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] placeholder-black w-full rounded-md p-1"
            // onChange={(e) => setthumbnail(e.target.files[0])}
          />
        </div>
        {/* Second Title Input */}
        <div className="mb-3">
          <input
            label="Enter your Title"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md px-3 py-3"
            placeholder="Enter Your Title"
            name="title"
            onChange={(e) => setBlogs({ ...blogs, title: e.target.value })}
            value={blogs.title}
          />
        </div>
        {/* Third description Input  */}
        <div className="mb-3">
          <input
            label="Enter your description"
            className="shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] w-full rounded-md px-3 py-5 "
            placeholder="Enter Your description"
            name="description"
            onChange={(e) =>
              setBlogs({ ...blogs, description: e.target.value })
            }
            value={blogs.description}
          />
        </div>
        {/* Four Editor  */}
        <Editor
          
          apiKey="q0ekbmy8v5895mjvgslryj7pa3yhas64xgz68krv6686q2v2"
          onEditorChange={(newValue, editor) => {
            setBlogs({ ...blogs, content: newValue });
            settext(editor.getContent({ format: "text" }));
          }}
          onInit={(evt, editor) => {
            settext(editor.getContent({ format: "text" }));
          }}
          initialValue="Write your Blog..."
          init={{
            plugins:
              "a11ychecker advcode advlist advtable anchor autocorrect autolink autoresize autosave casechange charmap checklist code codesample directionality editimage emoticons export footnotes formatpainter fullscreen image importcss inlinecss insertdatetime link linkchecker lists media mediaembed mentions mergetags nonbreaking pagebreak pageembed permanentpen powerpaste preview quickbars save searchreplace table tableofcontents template  tinydrive tinymcespellchecker typography visualblocks visualchars wordcount",
          }}
        />
      </div>
      {/* Five Submit Button  */}
      <div className="flex gap-5 items-center justify-center py-10">
      <Button className=" px-7   bg-primary " onClick={addPost}>SEND</Button>
      {/* Six Preview Section  */}
     
        <button className="text-white bg-primary rounded-lg py-2 px-5">Preview</button>
      </div>
      <ToastContainer />
    </div>

  );
};

export default CreateBlog;
