import mongoose, { Schema } from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  headerImage: {
    type: String,
  },

  content: {
    type: String,
    required: true,
    trim: true,
  },

  author: { type: Schema.Types.ObjectId, ref: "User" },
});
export default mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema, "blogs");
