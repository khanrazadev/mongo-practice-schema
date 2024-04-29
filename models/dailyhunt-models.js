import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "Username is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
  },
  { timestamps: true }
);

//Article
const articleSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "Title is required"] },
    content: { type: String, required: [true, "Content is required"] },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// Comment
const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: [true, "Comment content is required"] },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    article: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Article",
      required: true,
    },
  },
  { timestamps: true }
);

export const Comment = mongoose.model("Comment", commentSchema);
export const Article = mongoose.model("Article", articleSchema);
export const User = mongoose.model("User", userSchema);
