import mongoose from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    content: {
      type: String,
      required: [true, "Content is required."],
    },
    tags: [String],
  },
  { timestamps: true }
);

//Notebook
const notebookSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    notes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  { timestamps: true }
);

// User
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required."],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    notebooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notebook",
      },
    ],
  },
  { timestamps: true }
);

export const Note = mongoose.model("Note", noteSchema);
export const Notebook = mongoose.model("Notebook", notebookSchema);
export const User = mongoose.model("User", userSchema);
