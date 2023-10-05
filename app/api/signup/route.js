import User from "@/models/User";
import connectDB from "@/utils/mongoose";
import { NextResponse } from "next/server";
import * as bcrypt from "bcryptjs";

// connect to Database
connectDB();

export const POST = async (request) => {
    try {
      const reqBody = await request.json(); // await the result of request.json()
      const { name, email, password, userName, address, phone } = reqBody;
  
      // check if user already exists
      const user = await User.findOne({ email });
      if (user) {
        return NextResponse.json(
          { error: "User already exists" },
          { status: 400 }
        );
      }
  
      // hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // create user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        userName,
        address,
        phone,
      });
  
      // save user
      const savedUser = await newUser.save();
  
      return NextResponse.json(
        { message: "user created successfully", savedUser },
        { status: 201 }
      );
  
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  };