import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      middleName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        trim: true,
      },
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    userName: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    address: {
      house: {
        type: String,
        required: true,
        trim: true,
      },
      area: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      state: {
        type: String,
        required: true,
        trim: true,
      },
      country: {
        type: String,
        required: true,
        trim: true,
      },
      pin: {
        type: Number,
        required: true,
        trim: true,
      },
    },

    phone: {
      type: Number,
      required: true,
      trim: true,
    },

    credits: {
      type: Number,
      default: 0,
    },

    blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
  },

  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema, "users");
