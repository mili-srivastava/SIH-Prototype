import Blog from "@/models/Blog";
import User from "@/models/User";
import connectDB from "@/utils/mongoose";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// connect to Database
connectDB();

export const POST = async (request) => {
  try {
    const reqBody = await request.json(); // await the result of request.json()
    const { title, description, headerImage, content, author } = reqBody;

    // check if user exists or not
    const existingUser = await User.findById(author);
    if (!existingUser) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }

    // create blog
    const newBlog = new Blog({
      title,
      description,
      headerImage,
      content,
      author: new mongoose.Types.ObjectId(existingUser._id.toString()), // assign author field here
    });

    // save blog
    const savedBlog = await newBlog.save();
    return NextResponse.json(
      {
        message: "Blog created successfully",
        savedBlog,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const GET = async (request) => {
  try {
    const blogs = await Blog.find().populate("author");
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
